class CustomJSON {
  static parse(str = null) {
    if (!str || typeof str !== "string") return null;
    else {
      const obj = { "and": {} };
      const parts = str.split(",");
      for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes(":")) {
          let [key, value] = this.doFormating(parts[i]);
          if (!key || !value) return null;
          obj["and"][key] = value;
        } else {
          return null;
        }
      }
      return obj;
    }
  }

  static doFormating(str) {
    let [key, value] = str.split(":");
    key = key.replace("_", ".");

    if (/.date$/.test(key)) {
      value = this.formatValueToObj(value, "date");
    } else {
      value = this.formatValueToObj(value);
    }
    return [key, value];
  }

  static formatValueToObj(valueStr, type = null) {
    switch (type) {
      case "date":
        const [startDate, endDate] = valueStr.split("--to--");
        const [formatedStartDate, formatedEndDate] = this.formatDate(startDate, endDate);
        if (!formatedStartDate || !formatedEndDate) return null;
        return {
          "between": [formatedStartDate, formatedEndDate]
        };
      default:
        if (valueStr.includes("|")) {
          return {
            "inq": valueStr.split("|").map(item => isNaN(item) ? item : parseInt(item, 10))
          }
        }
        return {
          "eq": isNaN(valueStr) ? valueStr : parseInt(valueStr, 10)
        }
    }
  }

  static formatDate(startDate, endDate) {
    return [new Date(startDate).toJSON(), new Date(endDate).toJSON()];
  }
}

// const str = "interview_attendance:P,interview_date:2019-04-15--to--2019-04-15,status:CAP"
// console.log(CustomJSON.parse(str))