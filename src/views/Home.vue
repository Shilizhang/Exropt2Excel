<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-button @click="exportExcel">导出</el-button>
  </div>
</template>

<script>
import { export_json_to_excel } from '../libs/Export2Excel'
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    exportExcel() {
      var tHeader = ['日期', '姓名', '地址']
      var filterVal = ['date', 'name','address']
      var filename = 'demoExcel'
      var data = this.formatJson(filterVal, this.tableData)
      export_json_to_excel({
        header: tHeader,
        data,
        filename
      })
    },
    formatJson(filterVal, tableData) {
      return tableData.map(v => {
          return filterVal.map(j => {
                  return v[j]
              })
          }
      )
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
