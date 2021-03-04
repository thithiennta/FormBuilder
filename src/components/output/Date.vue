<template>
  <div
    class="form-element-wrapper"
    :style="{
      'background-color': properties.general.backgroundColor,
      margin:
        properties.spacing.topMargin +
        'px ' +
        properties.spacing.rightMargin +
        'px ' +
        properties.spacing.bottomMargin +
        'px ' +
        properties.spacing.leftMargin +
        'px ',
    }"
  >
    <div
      class="input-field-name"
      :style="{
        'font-size': layoutSettings.label.labelSize + 'px',
        'font-weight': layoutSettings.label.labelBold ? 'bold' : '',
        'font-style': layoutSettings.label.labelItalic ? 'italic' : '',
        'min-width': 'fit-content',
        color: layoutSettings.label.labelInheritColor
          ? layoutSettings.color
          : layoutSettings.label.labelColor,
        'margin-bottom': layoutSettings.label.labelBottomMargin + 'px',
      }"
      v-if="
        layoutSettings.label.isOutsideLabel &&
          layoutSettings.label.labelPosition === 'top'
      "
    >
      {{ properties.text.fieldName }}
    </div>
    <div
      class="select-wrapper"
      :style="{
        display: 'flex',
        'align-items': layoutSettings.label.labelAlignCenter ? 'center' : '',
      }"
    >
      <div
        class="input-field-name"
        :style="{
          width: properties.general.label.inheritLabelMargin
            ? layoutSettings.label.labelWidth + 'px'
            : properties.general.label.labelRightMargin + 'px',
          'font-size': layoutSettings.label.labelSize + 'px',
          'font-weight': layoutSettings.label.labelBold ? 'bold' : '',
          'font-style': layoutSettings.label.labelItalic ? 'italic' : '',
          'min-width': 'fit-content',
          color: layoutSettings.label.labelInheritColor
            ? layoutSettings.color
            : layoutSettings.label.labelColor,
        }"
        v-if="
          layoutSettings.label.isOutsideLabel &&
            layoutSettings.label.labelPosition === 'left'
        "
      >
        {{ properties.text.fieldName }}
      </div>
      <div
        class="subfield-wrapper"
        :style="{
          width: '100%',
          ...maxWidth,
          display: 'flex',
        }"
      >
        <DateSubField
          :options="days"
          :textColor="properties.text.color"
          :textInheritColor="properties.text.inheritColor"
          :style="{
            order: dayOrder,
            'margin-right': dayOrder === 3 ? '' : '20px',
            width: properties.spacing.dayWidth + '%',
          }"
          @emitShowOptions="showOptions"
          @emitChangeOption="handleChangeOption"
          :showOptions="showDayOptions"
          :type="'Day'"
        />
        <DateSubField
          :options="months"
          :textColor="properties.text.color"
          :textInheritColor="properties.text.inheritColor"
          :style="{
            order: monthOrder,
            'margin-right': monthOrder === 3 ? '' : '20px',
            'max-width':
              'calc(' +
              (100 -
                properties.spacing.dayWidth -
                properties.spacing.yearWidth) +
              '% - 40px)',
            width: properties.spacing.monthWidth + '%',
          }"
          @emitShowOptions="showOptions"
          @emitChangeOption="handleChangeOption"
          :showOptions="showMonthOptions"
          :type="'Month'"
        />
        <DateSubField
          :options="years"
          :textColor="properties.text.color"
          :textInheritColor="properties.text.inheritColor"
          :style="{
            order: yearOrder,
            'margin-right': yearOrder === 3 ? '' : '20px',
            'max-width':
              'calc(' +
              (100 -
                properties.spacing.dayWidth -
                properties.spacing.monthWidth) +
              '% - 40px)',
            width: properties.spacing.yearWidth + '%',
          }"
          @emitShowOptions="showOptions"
          @emitChangeOption="handleChangeOption"
          :showOptions="showYearOptions"
          :type="'Year'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DateSubField from "./Date/DateSubField";
import { mapState } from "vuex";
export default {
  data() {
    return {
      days: null,
      months: null,
      years: null,
      currentDay: null,
      currentMonth: null,
      currentYear: null,
      dayOrder: 1,
      monthOrder: 2,
      yearOrder: 3,
      showDayOptions: false,
      showMonthOptions: false,
      showYearOptions: false,
    };
  },
  props: {
    properties: {
      required: true,
      type: Object,
    },
  },
  components: {
    DateSubField,
  },
  created() {
    this.calOrder();
    this.years = this.getYears();
    this.months = this.getMonths();
    this.days = this.getDays(new Date().getFullYear(), 1);
    this.currentYear = new Date().getFullYear();
    this.currentDay = 1;
    this.currentMonth = "January";
  },
  watch: {
    activeElement() {
      this.showDayOptions = false;
      this.showMonthOptions = false;
      this.showYearOptions = false;
    },
    dateFormat() {
      this.calOrder();
    },
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    ...mapState("customizerModule", ["activeElement"]),
    maxWidth() {
      if (
        this.layoutSettings.label.labelPosition === "left" &&
        this.layoutSettings.label.isOutsideLabel
      ) {
        return {
          "max-width":
            "calc(" +
            100 +
            "% - " +
            (this.properties.general.label.inheritLabelMargin
              ? this.layoutSettings.label.labelWidth
              : this.properties.general.label.labelRightMargin) +
            "px)",
        };
      }
      return {};
    },
    dateFormat() {
      return this.properties.option.dateFormat;
    },
  },
  methods: {
    getYears() {
      let date = new Date();
      let years = [];
      for (let i = date.getFullYear(); i >= date.getFullYear() - 100; i--) {
        years.push(i);
      }
      return years;
    },
    getMonths() {
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months;
    },
    getDays(year, month) {
      let days = [];
      let day_30 = [];
      let day_31 = [];
      let day_not_leap = [];
      let day_leap = [];
      for (let i = 1; i <= 31; i++) {
        day_31.push(i);
        if (i <= 30) day_30.push(i);
        if (i <= 29) day_leap.push(i);
        if (i <= 28) day_not_leap.push(i);
      }
      if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) !== -1) {
        days = day_31;
      } else days = day_30;
      if (month === 2) {
        if (year % 400 === 0) days = day_leap;
        else if (year % 4 === 0 && year % 100 !== 0) days = day_leap;
        else days = day_not_leap;
      }
      return days;
    },
    calOrder() {
      if (this.properties.option.dateFormat === "DD/MM/YYYY") {
        this.dayOrder = 1;
        this.monthOrder = 2;
        this.yearOrder = 3;
      }
      if (this.properties.option.dateFormat === "MM/DD/YYYY") {
        this.dayOrder = 2;
        this.monthOrder = 1;
        this.yearOrder = 3;
      }
      if (this.properties.option.dateFormat === "YYYY/MM/DD") {
        this.dayOrder = 3;
        this.monthOrder = 2;
        this.yearOrder = 1;
      }
    },
    showOptions(value) {
      let target;
      if (this["show" + value + "Options"]) target = false;
      else target = true;
      this.showDayOptions = false;
      this.showMonthOptions = false;
      this.showYearOptions = false;
      this["show" + value + "Options"] = target;
    },
    handleChangeOption(type, value) {
      this["current" + type] = value;
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let month = months.indexOf(this.currentMonth) + 1;
      this.days = this.getDays(this.currentYear, month);
      this["show" + type + "Options"] = false;
    },
  },
};
</script>

<style scoped>
.select-wrapper {
  display: flex;
}
</style>
