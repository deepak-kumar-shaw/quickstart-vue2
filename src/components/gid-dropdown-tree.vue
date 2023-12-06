<template>
  <div>
    <ejs-dropdowntree
      :id="id"
      ref="ejsddt"
      :fields="fields"
      :placeholder="placeholder"
      :enabled="!disabled"
      :allowMultiSelection="multiselect"
      :showCheckBox="checkBox"
      :showSelectAll="selectAll"
      :allowFiltering="true"
      :value="selectedIds"
      @update:value="selectHandler"
      :itemTemplate="iTemplate"
    >
      <!-- <template v-slot:itemTemplate="{ data }">
        <div class="flex-y-center">
          <v-btn class="pr-3">edit</v-btn>
          <div class="text-ellipsis">{{ data.label }}</div>
        </div>
      </template> -->
    </ejs-dropdowntree>
    <div class="pb-6">
      Not Edit button not txt from data is shown in the options of
      ejs-dropdowntree
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { DropDownTreeComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
  name: "GidDropdownTree",
  components: {
    "ejs-dropdowntree": DropDownTreeComponent,
  },
  props: {
    id: { type: String, default: "gid-dropdown-tree" },
    // /**if false the data items must be  self-referential OR list data*/
    // isHierarchicalData: {
    //   type: Boolean,
    //   default: true,
    // },

    /**
     * Array of objects
     * {if data is heirarchical then data must have `child` prop as array for children Ex: items = [{id:1, label:'parentLabel', child:[{id:2, label:'childLabel'}]}] }
     * {if data is self-referential OR list data then `pid` prop must be the id of parent Ex: items = [{id:1, label:'parentLabel', hasChildren:true}, {id:2, label:'childLabel', pid:1}]}
     */
    items: {
      type: Array,
      default: () => [],
    },
    /** Gets or sets the value of selected item(s) which maps the data value field in the component. */
    selectedIds: {
      type: Array,
      default: () => [],
    },
    /** Specifies a short hint that describes the expected value of the Dropdown Tree component. */
    placeholder: {
      type: String,
      default: null,
    },
    /** When set to true, the user interactions on the component will be disabled. */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** Enables or disables the multi-selection of items. when false make sure checkBox prop is also false. Single select with checkbox is not supported */
    multiselect: {
      type: Boolean,
      default: false,
    },
    /** Enables or disables the checkbox option in the Dropdown Tree component. If enabled, the Checkbox will be displayed next to the expand or collapse icon of the tree items.*/
    checkBox: {
      type: Boolean,
      default: false,
    },
    /** Specifies whether to show or hide the selectAll checkbox in the pop-up which allows you to select all the items in the pop-up. */
    selectAll: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fields() {
      let t = {
        value: "id",
        text: "label",
        dataSource: this.items,
        [this.isHierarchicalData ? "child" : "parentValue"]: this
          .isHierarchicalData
          ? "child"
          : "pid",
        hasChildren: "hasChildren",
        expanded: "expanded",
        iconCss: "iconCss",
        imageUrl: "imageUrl",
        // query: null,
        selected: "selected",
        selectable: "selectable",
        tableName: null,
        tooltip: "label",
      };
      return t;
    },
  },
  data() {
    return {
      isHierarchicalData: true,
      iTemplate: function () {
        return {
          template: Vue.component("itemTemplate", {
            template:
              `<div class="flex-y-center"> <v-btn>edit</v-btn> <div class="text-ellipsis"> deepak </div> </div>`,
            data() {
              return { data: {} };
            },
          }),
        };
      },
    };
  },
  methods: {
    getSelectedItems() {
      return [...this.$refs.ejsddt._data.ej2Instance.selectedData];
    },
    selectHandler(event) {
      this.$emit("select", { selectedIds: event });
    },
  },
};
</script>
<style scoped>
@import "./../../public/css/syncfusion-material/material.css";
/*@import "./../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "./../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "./../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "./../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "./../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "./../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css"; */
</style>
