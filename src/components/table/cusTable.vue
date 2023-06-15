<template>
  <div class="cus-table">
    <el-table
      ref="table"
      :data="tableData"
      :height="height"
      :max-height="maxHeight"
      :stripe="stripe"
      :border="border"
      :size="size"
      :fit="fit"
      :show-header="showHeader"
      :highlight-current-row="highlightCurrentRow"
      :current-row-key="currentRowKey"
      :row-class-name="rowClassName"
      :row-style="rowStyle"
      :cell-class-name="cellClassName"
      :cell-style="cellStyle"
      :header-row-class-name="headerRowClassName"
      :header-row-style="headerRowStyle"
      :header-cell-class-name="headerCellClassName"
      :header-cell-style="headerCellStyle"
      :row-key="rowKey"
      :empty-text="emptyText"
      :default-expand-all="defaultExpandAll"
      :expand-row-keys="expandRowKeys"
      :default-sort="defaultSort"
      :tooltip-effect="tooltipEffect"
      :show-summary="showSummary"
      :sum-text="sumText"
      :summary-method="summaryMethod"
      :span-method="spanMethod"
      :select-on-indeterminate="selectOnIndeterminate"
      :indent="indent"
      :lazy="lazy"
      :load="load"
      :tree-props="treeProps"
      @select="select"
      @select-all="selectAll"
      @selection-change="selectionChange"
      @cell-mouse-enter="cellMouseEnter"
      @cell-mouse-leave="cellMouseLeave"
      @cell-click="cellClick"
      @cell-dblclick="cellDblclick"
      @row-click="rowClick"
      @row-contextmenu="rowContextmenu"
      @row-dblclick="rowCblclick"
      @header-click="headerClick"
      @header-contextmenu="headerContextmenu"
      @sort-change="sortChange"
      @filter-change="filterChange"
      @current-change="currentTableChange"
      @header-dragend="headerDragend"
      @expand-change="expandChange"
    >
      <!-- 复选列 -->
      <el-table-column
        v-if="selection"
        width="50"
        label="fuxuan"
        type="selection"
        :align="align"
        :selectable="selectable"
        :reserve-selection="reserveSelection"
      >
      </el-table-column>
      <!-- 序号列 -->
      <el-table-column
        v-if="showIndex"
        label="序号"
        type="index"
        width="50"
        fixed="left"
        :align="align"
        :index="indexMethod"
      ></el-table-column>

      <!-- 表格列 -->
      <template v-for="(item, index) in columns">
        <el-table-column
          :key="`${item.prop}_${item.label}_${index}`"
          :label="item.label"
          :prop="item.prop"
          :column-key="item.columnKey"
          :width="item.width"
          :min-width="item.minWidth"
          :fixed="item.fixed"
          :render-header="item.renderHeader"
          :sortable="item.sortable"
          :sort-method="item.sortMethod"
          :sort-by="item.sortBy"
          :sort-orders="item.sortOrders"
          :resizable="item.resizable"
          :formatter="item.formatter"
          :show-overflow-tooltip="
            item.showOverflowTooltip
              ? item.showOverflowTooltip
              : showOverflowTooltip
          "
          :align="item.align ? item.align : align"
          :header-align="
            item.headerAlign
              ? item.headerAlign
              : item.align
              ? item.align
              : align
          "
          :class-name="item.className"
          :label-class-name="item.labelClassName"
          :filters="item.filters"
          :filter-placement="item.filterPlacement"
          :filter-multiple="item.filterMultiple"
          :filter-method="item.filterMethod"
          :filtered-value="item.filteredValue"
        >
          <template slot="header" slot-scope="scope">
            <slot
              v-if="headSlots.indexOf('head-' + item.prop) != -1"
              :name="'head-' + item.prop"
              v-bind="scope"
            ></slot>
            <div v-else>{{ scope.column.label }}</div>
          </template>

          <template slot-scope="scope">
            <slot
              v-if="colSlots.indexOf(item.prop) != -1"
              :name="item.prop"
              v-bind="scope"
            ></slot>
            <div v-else>
              {{
                scope.row[item.prop]
                  ? item.timeFormat
                    ? $formatDate(scope.row[item.prop], item.timeFormat)
                    : scope.row[item.prop]
                  : defaultCellText
              }}
            </div>
          </template>
          <template v-for="(item2, index2) in item.children">
            <el-table-column
              :key="`${item2.prop}_${item2.label}_${index2}`"
              :label="item2.label"
              :prop="item2.prop"
              :column-key="item2.columnKey"
              :width="item2.width"
              :min-width="item2.minWidth"
              :fixed="item2.fixed"
              :render-header="item2.renderHeader"
              :sortable="item2.sortable"
              :sort-method="item2.sortMethod"
              :sort-by="item2.sortBy"
              :sort-orders="item2.sortOrders"
              :resizable="item2.resizable"
              :formatter="item2.formatter"
              :show-overflow-tooltip="
                item2.showOverflowTooltip
                  ? item2.showOverflowTooltip
                  : showOverflowTooltip
              "
              :align="item2.align ? item2.align : align"
              :header-align="
                item2.headerAlign
                  ? item2.headerAlign
                  : item2.align
                  ? item2.align
                  : align
              "
              :class-name="item2.className"
              :label-class-name="item2.labelClassName"
              :filters="item2.filters"
              :filter-placement="item2.filterPlacement"
              :filter-multiple="item2.filterMultiple"
              :filter-method="item2.filterMethod"
              :filtered-value="item2.filteredValue"
            >
              <template slot="header" slot-scope="scope">
                <slot
                  v-if="headSlots.indexOf('head-' + item2.prop) != -1"
                  :name="'head-' + item2.prop"
                  v-bind="scope"
                ></slot>
                <div v-else>{{ scope.column.label }}</div>
              </template>

              <template slot-scope="scope">
                <slot
                  v-if="colSlots.indexOf(item2.prop) != -1"
                  :name="item2.prop"
                  v-bind="scope"
                ></slot>
                <div v-else>
                  {{
                    scope.row[item2.prop]
                      ? scope.row[item2.prop]
                      : defaultCellText
                  }}
                </div>
              </template>
            </el-table-column>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="cus-pageination" v-if="pageSize == 'none'">
      <el-pagination
        :small="small"
        :background="background"
        :page-size="pageSize"
        :page-sizes="pageSizes"
        :total="total"
        :pager-count="pagerCount"
        :current-page="currentPage"
        :layout="layout"
        :popper-class="popperClass"
        :prev-text="prevText"
        :next-text="nextText"
        :disabled="disabled"
        :hide-on-single-page="hideOnSinglePage"
        @size-change="sizeChange"
        @current-change="currentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 是否显示序号
    showIndex: {
      type: Boolean,
      default: false,
    },

    // 是否显示复选框
    selection: {
      type: Boolean,
      default: false,
    },
    // 返回值用来决定这一行的 CheckBox 是否可以勾选
    selectable: Function,
    // 在数据更新之后是否保留之前选中的数据
    reserveSelection: {
      type: Boolean,
      default: false,
    },
    // 单元格内容过多是否显示tip
    showOverflowTooltip: {
      type: Boolean,
      default: true,
    },
    // 表头
    columns: {
      type: Array,
      default: [],
    },
    // 表格头插槽
    headSlots: {
      type: Array,
      default: () => [],
    },
    // 表格列插槽
    colSlots: {
      type: Array,
      default: () => [],
    },
    // 表格中展示的数据
    tableData: {
      type: Array,
      default: () => [],
    },
    // Table 的高度
    height: {
      type: [String, Number],
      default: '-',
    },
    // Table 的最大高度
    maxHeight: {
      tyoe: [String, Number],
      default: '-',
    },
    // 	是否为斑马纹 table
    stripe: {
      type: Boolean,
      default: false,
    },
    // 是否带有纵向边框
    border: {
      type: Boolean,
      default: false,
    },
    // Table 的尺寸:medium / small / mini
    size: {
      type: String,
      default: 'small',
    },
    // 列的宽度是否自撑开
    fit: {
      type: Boolean,
      default: true,
    },
    // 是否显示表头
    showHeader: {
      type: Boolean,
      default: true,
    },
    // 是否要高亮当前行
    highlightCurrentRow: {
      type: Boolean,
      default: true,
    },
    // 当前行的 key，只写属性
    currentRowKey: {
      type: [String, Number],
      default: '',
    },
    // 行的 className 的回调方法
    rowClassName: {
      type: [Function, String],
      default: '',
    },
    // 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style
    rowStyle: {
      type: [Function, Object],
      default: () => ({}),
    },
    // 单元格的 className 的回调方法
    cellClassName: {
      type: [Function, String],
      default: '',
    },
    // 单元格的 style 的回调方法
    cellStyle: {
      type: [Function, Object],
      default: () => ({}),
    },
    // 表头行的 className 的回调方法
    headerRowClassName: {
      type: [Function, String],
      default: '',
    },
    // 表头行的 style 的回调方法
    headerRowStyle: {
      type: [Function, Object],
      default: () => ({}),
    },
    // 表头单元格的 className 的回调方法
    headerCellClassName: {
      type: [Function, String],
      default: '',
    },
    // 表头单元格的 style 的回调方法
    headerCellStyle: {
      type: [Function, Object],
      default: () => ({}),
    },
    rowKey: {
      type: [Function, String],
      default: 'id',
    },
    // 空数据时显示的文本内容
    emptyText: {
      type: String,
      default: '暂无数据',
    },
    // 是否默认展开所有行
    defaultExpandAll: {
      type: Boolean,
      default: false,
    },
    // 可以通过该属性设置 Table 目前的展开行
    expandRowKeys: {
      type: Array,
      default: () => [],
    },
    // 默认的排序列的 prop 和顺序
    defaultSort: {
      type: Object,
      default: () => ({}),
    },
    // tooltip effect 属性
    tooltipEffect: {
      type: String,
      default: 'dark',
    },
    // 是否在表尾显示合计行
    showSummary: {
      type: Boolean,
      default: false,
    },
    // 合计行第一列的文本
    sumText: {
      type: String,
      default: '合计',
    },
    // 自定义的合计计算方法
    summaryMethod: Function,
    // 合并行或列的计算方法
    spanMethod: Function,
    // 点击表头的多选框时的行为
    selectOnIndeterminate: {
      type: Boolean,
      default: true,
    },
    // 展示树形数据时，树节点的缩进
    indent: {
      type: Number,
      default: 16,
    },
    // 是否懒加载子节点数据
    lazy: {
      type: Boolean,
      default: false,
    },
    // 加载子节点数据的函数
    load: Function,
    treeProps: {
      type: Object,
      default: () => ({}),
    },
    // 整体对齐方式
    align: {
      type: String,
      default: 'left',
    },
    // 单元格没有值时的默认值
    defaultCellText: {
      type: String,
      default: '',
    },
    /**
     * 分页组件配置
     */
    layout: {
      type: String,
      default: 'sizes, prev, pager, next, jumper, ->, total, slot',
    },
    // 是否使用小型分页样式
    small: {
      type: Boolean,
      default: false,
    },
    // 是否为分页按钮添加背景色
    background: {
      type: Boolean,
      default: false,
    },
    // 每页显示条目个数，支持 .sync 修饰符
    pageSize: {
      type: [Number, String],
      default: 10,
    },
    // 总条目数
    total: {
      type: Number,
      default: 0,
    },
    // 页码按钮的数量，当总页数超过该值时会折叠
    pagerCount: {
      type: Number,
      default: 7,
    },
    // 当前页数，支持 .sync 修饰符
    currentPage: {
      type: Number,
      default: 1,
    },
    // 每页显示个数选择器的选项设置
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50, 100],
    },
    // 每页显示个数选择器的下拉框类名
    popperClass: {
      type: String,
      default: '',
    },
    // 替代图标显示的上一页文字
    prevText: {
      type: String,
      default: '',
    },
    // 替代图标显示的下一页文字
    nextText: {
      type: String,
      default: '',
    },
    // 是否禁用分页
    disabled: {
      type: Boolean,
      default: false,
    },
    // 只有一页时是否隐藏
    hideOnSinglePage: {
      type: Boolean,
      default: false,
    },
  },
  name: 'cusTable',
  data() {
    return {}
  },
  watch: {},
  created() {},
  methods: {
    indexMethod(index) {
      if (this.pageSize != 'none') {
        return index + 1 + (this.currentPage - 1) * this.pageSize
      } else {
        return index + 1
      }
    },
    // 当用户手动勾选数据行的 Checkbox 时触发的事件
    select(selection, row) {
      this.$emit('select', selection, row)
    },
    // 当用户手动勾选全选 Checkbox 时触发的事件
    selectAll(selection) {
      this.$emit('selectAll', selection)
    },
    // 	当选择项发生变化时会触发该事件
    selectionChange(selection) {
      this.$emit('selectionChange', selection)
    },
    // 当单元格 hover 进入时会触发该事件
    cellMouseEnter(row, column, cell, event) {
      this.$emit('cellMouseEnter', row, column, cell, event)
    },
    // 当单元格 hover 退出时会触发该事件
    cellMouseLeave(row, column, cell, event) {
      this.$emit('cellMouseLeave', row, column, cell, event)
    },
    // 当某个单元格被点击时会触发该事件
    cellClick(row, column, cell, event) {
      this.$emit('cellClick', row, column, cell, event)
    },
    // 当某个单元格被双击击时会触发该事件
    cellDblclick(row, column, cell, event) {
      this.$emit('cellDblclick', row, column, cell, event)
    },
    // 当某一行被点击时会触发该事件
    rowClick(row, column, event) {
      this.$emit('rowClick', row, column, event)
    },
    // 当某一行被鼠标右键点击时会触发该事件
    rowContextmenu(row, column, event) {
      this.$emit('rowContextmenu', row, column, event)
    },
    // 当某一行被双击时会触发该事件
    rowCblclick(row, column, event) {
      this.$emit('rowCblclick', row, column, event)
    },
    // 当某一列的表头被点击时会触发该事件
    headerClick(column, event) {
      this.$emit('headerClick', column, event)
    },
    // 当某一列的表头被鼠标右键点击时触发该事件
    headerContextmenu(column, event) {
      this.$emit('headerContextmenu', column, event)
    },
    // 当表格的排序条件发生变化的时候会触发该事件
    sortChange({ column, prop, order }) {
      this.$emit('sortChange', { column, prop, order })
    },
    // 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组
    filterChange(filters) {
      this.$emit('filterChange', filters)
    },
    // 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组
    currentTableChange(currentRow, oldCurrentRow) {
      this.$emit('currentTableChange', currentRow, oldCurrentRow)
    },
    // 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组
    headerDragend(newWidth, oldWidth, column, event) {
      this.$emit('headerDragend', newWidth, oldWidth, column, event)
    },
    // 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组
    expandChange(row, expandedRows) {
      this.$emit('expandChange', row, expandedRows)
    },
    /**
     * 分页组件回调
     */
    // pageSize 改变时会触发
    sizeChange(pageSize) {
      // this.$emit('update:pageSize', pageSize)
      this.$emit('sizeChange', pageSize)
    },
    // 分页currentPage 改变时会触发
    currentChange(currentPage) {
      // this.$emit('updata:currentPage', currentPage)
      this.$emit('currentChange', currentPage)
    },
    // 用户点击上一页按钮改变当前页后触发
    prevClick(currentPage) {
      this.$emit('prevClick', currentPage)
    },
    // 用户点击下一页按钮改变当前页后触发
    nextClick(currentPage) {
      this.$emit('nextClick', currentPage)
    },
  },
}
</script>
<style lang="scss" scoped>
.cus-table {
  width: 50%;
  flex: 1;
  .cus-pageination {
    text-align: right;
    padding: 10px 0;
  }
}
</style>
