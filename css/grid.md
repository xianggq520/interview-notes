Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。

采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。


# 容器属性

- display：grid/inline-gird
- grid-template-columns
- grid-template-rows
- grid-template-areas
- grid-auto-columns
- grid-auto-rows
- grid-auto-flow
- grid-gap/grid-row-gap/grid-column-gap
- place-content/align-content/justify-content

# 项目属性
- grid-area
- grid-row/grid-row-start/grid-row-end
- grid-column/grid-column-start/grid-column-end
- place-self/align-self/justify-self