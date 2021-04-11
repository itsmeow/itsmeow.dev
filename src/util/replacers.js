const renderUpdater = (text) => {
  const rule = /((?<=addRender\().+?(?=,))/gm
  text = text.replace(/(?<=addRender\(.+)\.class(?=,)/gm, "")
  text = text.replace(
    /(?<=addRender\((?:[A-Z]\S+)*)Entity(?=(?:[A-Z]\S+)*,)/gm,
    ""
  )
  let match = text.match(rule)
  if (match != null && match.length > 0) {
    for (let m of match) {
      let match2 = m.match(/[a-z][A-Z]/gm)
      let newM = m
      if (match2 != null && match2.length > 0) {
        for (let m2 of match2) {
          newM = m.replace(new RegExp(m2, "gm"), m2[0] + "_" + m2[1])
        }
      }
      let rule2 = new RegExp(`((?<=addRender\\()${m}(?=,))`, "gm")
      text = text.replace(
        rule2,
        "ModEntities." + newM.toUpperCase() + ".getEntityType()"
      )
    }
  }
  return text
}
const attribUpdater = (text) => {
  text = text.replace(/^\s+/gm, "")
  text = text.replace(
    /this\.getAttribute\((?=SharedMonsterAttributes\.[A-Z_]+\)\.setBaseValue\(\d+(\.\d+)?[dD]?\);)/gm,
    ".func_233815_a_("
  )
  text = text.replace(
    /SharedMonsterAttributes.MAX_HEALTH/gm,
    "Attributes.field_233818_a_"
  )
  text = text.replace(
    /SharedMonsterAttributes.FOLLOW_RANGE/gm,
    "Attributes.field_233819_b_"
  )
  text = text.replace(
    /SharedMonsterAttributes.MOVEMENT_SPEED/gm,
    "Attributes.field_233821_d_"
  )
  text = text.replace(
    /SharedMonsterAttributes.ATTACK_DAMAGE/gm,
    "Attributes.field_233823_f_"
  )
  text = text.replace(
    /SharedMonsterAttributes.ATTACK_SPEED/gm,
    "Attributes.field_233825_h_"
  )
  text = text.replace(
    /SharedMonsterAttributes.FLYING_SPEED/gm,
    "Attributes.field_233822_e_"
  )
  text = text.replace(
    /SharedMonsterAttributes.KNOCKBACK_RESISTANCE/gm,
    "Attributes.field_233820_c_"
  )
  text = text.replace(/\)\.setBaseValue\((?=\d+(\.\d+)?[dD]?\);)/gm, ", ")
  text = text.replace(
    /this\.getAttributes\(\)\.registerAttribute\(/gm,
    ".func_233814_a_("
  )
  text = text.replace(/(?<=\));/gm, "")
  return text
}
const attribUpdaterToMCP = (text) => {
  return text
    .replace(/func_233815_a_/gm, "createMutableAttribute")
    .replace(/func_233814_a_/gm, "createMutableAttribute")
    .replace(/field_233818_a_/gm, "MAX_HEALTH")
    .replace(/field_233819_b_/gm, "FOLLOW_RANGE")
    .replace(/field_233821_d_/gm, "MOVEMENT_SPEED")
    .replace(/field_233823_f_/gm, "ATTACK_DAMAGE")
    .replace(/field_233825_h_/gm, "ATTACK_SPEED")
    .replace(/field_233822_e_/gm, "FLYING_SPEED")
    .replace(/field_233820_c_/gm, "KNOCKBACK_RESISTANCE")
}
const attribUpdaterMCP = (text) => {
  return attribUpdaterToMCP(attribUpdater(text))
}
const doubleToFloat = (text) => {
  const matches = text.match(/\d+(\.\d+)?[dD](?!(\.\d+)?[fF])/gm)
  if (matches != null && matches.length > 0) {
    for (const match of matches) {
      text = text.replace(
        new RegExp(`(?<=${match.substring(0, match.length - 1)})[dD]`, "gm"),
        "F"
      )
    }
  }
  return text
}
const floatToDouble = (text) => {
  const matches = text.match(/\d+(\.\d+)?[fF](?!(\.\d+)?[dD])/gm)
  if (matches != null && matches.length > 0) {
    for (const match of matches) {
      text = text.replace(
        new RegExp(`(?<=${match.substring(0, match.length - 1)})[fF]`, "gm"),
        "D"
      )
    }
  }
  return text
}
const modelRotateAngles = (text) => {
  const matches = text.match(/^[\s]*this.setRotateAngle.*;/gm)
  if (!matches) {
    return ""
  }
  return matches.join("\n")
}
const entityConstructorUpdater = (text) => {
  let type = text.match(/(?<=public\ )Entity\w+(?=\(World)/gm)
  if (!type || type.length < 1) {
    return ""
  }
  type = type[0]
  text = text.replace(
    /super\(ModEntities\.\w+\.entityType, world(In)?\);/gm,
    "super(entityType, worldIn);"
  )
  text = text.replace(
    /(?<=public\ Entity\w+\()World\ world(In)?(?=\)\ \{)/gm,
    "EntityType<? extends " + type + "> entityType, World worldIn"
  )
  return text
}

const Methods = () => {
  return {
    "1.15 Render Updater": renderUpdater,
    "1.16 Attribute Updater (SRG)": attribUpdater,
    "1.16 Attribute Updater (MCP)": attribUpdaterMCP,
    "Double -> Float Constant Replacer": doubleToFloat,
    "Float -> Double Constant Replacer": floatToDouble,
    "Model Rotate Angles": modelRotateAngles,
    "Entity Constructor Updater": entityConstructorUpdater,
  }
}
export default Methods
export {
  renderUpdater,
  attribUpdater,
  doubleToFloat,
  floatToDouble,
  modelRotateAngles,
  entityConstructorUpdater,
}
