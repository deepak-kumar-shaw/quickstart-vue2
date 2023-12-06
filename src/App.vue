<template>
  <div id="app">
    <v-app>
      <v-btn class="pr-4">edit</v-btn>
      <v-icon>edit </v-icon>
      <gid-dropdown-tree :items="itemsTree" class="pt-6"> </gid-dropdown-tree>
    </v-app>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import GidDropdownTree from "./components/gid-dropdown-tree.vue";

export default {
  name: "App",
  components: {
    GidDropdownTree,
  },
  data() {
    return {
      itemsTree: [
        {
          selected: true,
          id: "01",
          label: "Local Disk (C:)",
          icon: "gid-schema",
          expanded: true,
          child: [
            {
              id: "01-01",
              label:
                "Program Files and I am very long text to check overflow. I must show ellipsis when shown in input",
              child: [
                { id: "01-01-01", label: "Windows NT" },
                { id: "01-01-02", label: "Windows Mail" },
                { id: "01-01-03", label: "Windows Photo Viewer" },
              ],
            },
            {
              id: "01-02",
              label: "Users",
              expanded: true,
              child: [
                { id: "01-02-01", label: "Smith" },
                { id: "01-02-02", label: "Public" },
                { id: "01-02-03", label: "Admin" },
              ],
            },
            {
              id: "01-03",
              label: "Windows",
              child: [
                { id: "01-03-01", label: "Boot" },
                { id: "01-03-02", label: "FileManager" },
                { id: "01-03-03", label: "System32" },
              ],
            },
          ],
        },
        {
          id: "02",
          label: "Local Disk (D:)",
          child: [
            {
              id: "02-01",
              label: "Personals",
              child: [
                { id: "02-01-01", label: "My photo.png" },
                { id: "02-01-02", label: "Rental document.docx" },
                { id: "02-01-03", label: "Pay slip.pdf" },
              ],
            },
            {
              id: "02-02",
              label: "Projects",
              child: [
                { id: "02-02-01", label: "ASP Application" },
                { id: "02-02-02", label: "TypeScript Application" },
                { id: "02-02-03", label: "React Application" },
              ],
            },
            {
              id: "02-03",
              label: "Office",
              child: [
                { id: "02-03-01", label: "Work details.docx" },
                { id: "02-03-02", label: "Weekly report.docx" },
                { id: "02-03-03", label: "Wish list.csv" },
              ],
            },
          ],
        },
        {
          id: "03",
          label: "Local Disk (E:)",
          icon: "folder",
          child: [
            {
              id: "03-01",
              label: "Pictures",
              child: [
                { id: "03-01-01", label: "Wind.jpg" },
                { id: "03-01-02", label: "Stone.jpg" },
                { id: "03-01-03", label: "Home.jpg" },
              ],
            },
            {
              id: "03-02",
              label: "Documents",
              child: [
                { id: "03-02-01", label: "Environment Pollution.docx" },
                { id: "03-02-02", label: "Global Warming.ppt" },
                { id: "03-02-03", label: "Social Network.pdf" },
              ],
            },
            {
              id: "03-03",
              label: "Study Materials",
              child: [
                { id: "03-03-01", label: "UI-Guide.pdf" },
                { id: "03-03-02", label: "Tutorials.zip" },
                { id: "03-03-03", label: "TypeScript.7z" },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
