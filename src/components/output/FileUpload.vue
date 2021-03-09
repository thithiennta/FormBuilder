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
      class="date-picker-wrapper"
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
      <input
        type="file"
        :id="rowId + '-file-upload'"
        :name="properties.text.name"
        hidden
      />
      <label
        :for="rowId + '-file-upload'"
        :style="{
          border: '1px dashed ' + layoutSettings.border.color,
          width: properties.spacing.width + '%',
          color: layoutSettings.color,
          ...maxWidth,
          'background-color': layoutSettings.field.backgroundColor,
          'font-family': 'inherit',
          'font-weight': layoutSettings.weight,
          'text-align': 'center',
        }"
      >
        <i class="fas fa-cloud-upload-alt" v-if="src === ''"></i>
        <img
          :id="rowId + '-file-image'"
          :src="src"
          alt=""
          style="max-width: 100%; max-height: 100px"
        />
        <p
          :id="rowId + '-file-name'"
          style="max-width: 100%;overflow-wrap: anywhere;"
        >
          {{ fileName }}
        </p>
      </label>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    properties: {
      required: true,
      type: Object,
    },
    rowId: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      value: null,
      src: "",
      fileName: "Click here to upload",
    };
  },
  mounted() {
    var btn = document.getElementById(this.rowId + "-file-upload");
    btn.addEventListener("change", (e) => {
      let url = URL.createObjectURL(e.target.files[0]);
      this.fileName = e.target.files[0].name;
      this.src = url;
    });
  },
  methods: {},
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    ...mapState("customizerModule", ["activeElement"]),
    border() {
      if (this.layoutSettings.border.fullWidth) {
        return {
          "border-style": this.layoutSettings.border.style,
          "border-color": this.layoutSettings.border.color,
          "border-top-width": this.layoutSettings.border.topWidth + "px ",
          "border-right-width": this.layoutSettings.border.rightWidth + "px ",
          "border-bottom-width": this.layoutSettings.border.bottomWidth + "px ",
          "border-left-width": this.layoutSettings.border.leftWidth + "px ",
        };
      } else {
        return {
          border:
            this.layoutSettings.border.allSidesWidth +
            "px " +
            this.layoutSettings.border.style +
            " " +
            this.layoutSettings.border.color,
        };
      }
    },
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
  },
};
</script>

<style scoped>
label {
  cursor: pointer;
  padding: 20px;
  display: inline-block;
}
label i {
  margin-bottom: 20px;
}
</style>
