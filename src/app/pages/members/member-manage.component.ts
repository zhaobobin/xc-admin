import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TransferChange } from 'ng-zorro-antd/transfer';
import { listData, detailData } from './members.data';

@Component({
  selector: 'member-manage',
  templateUrl: './member-manage.component.html',
  styleUrls: ['./member-manage.component.less']
})
export class MemberManageComponent implements OnInit {

  title = '通讯录';

  defaultExpandedKeys: string[] = ['1', '1-3', '1-3-1']; // 默认展开
  searchValue: string = ''; // 搜索条件
  selectedMember?: NzTreeNodeOptions = undefined; // 当前选中

  memberDetail: any = null; // 详情数据
  list: NzTreeNodeOptions[] = [];
  membersTree: NzTreeNodeOptions[] = []; // 源数据
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();

  timer?: ReturnType<typeof setTimeout> = undefined; // 搜索防抖
  searchLoading = false;
  searchResult: { departments: any[], members: any[] } = {
    departments: [],
    members: []
  };

  enableDropList = false; // 列表能否拖拽
  
  enableDropTable = false; // 表格能否拖拽

  departmentModalVisible = false; // 选择部门
  checkedNodeList: NzTreeNode[] = [];
  departmentFilterValue = '';

  validateForm!: FormGroup;

  nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      icon: 'smile',
      children: [
        { title: 'leaf', key: '1001', icon: 'meh', isLeaf: true },
        { title: 'leaf', key: '1002', icon: 'frown', isLeaf: true }
      ]
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initList();
    this.validateForm = this.fb.group({
      idcard: [null],
      name: [null],
      mobile: [null]
    });
  }

  initList = () => {
    this.list = listData;
    this.membersTree = this.generateTree(listData);
    this.memberDetail = detailData;
  }

  nzClick = (event: NzFormatEmitEvent) => {
    this.selectedMember = event.node?.origin;
  }

  // 编辑标题
  handleClickEditTitle = () => {
    
  }

  // 下级部门
  changeEnableDropList = () => {
    this.enableDropList = !this.enableDropList;
  }

  dropList = (event: CdkDragDrop<string[]>) => {
    moveItemInArray(this.memberDetail.department, event.previousIndex, event.currentIndex);
  }

  // 部门人员
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  refreshCheckedStatus(): void {
    this.checked = this.memberDetail.members.every((item: any) => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.memberDetail.members.some((item: any) => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.memberDetail.members.forEach((item: any) => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  changeEnableDropTable = () => {
    this.enableDropTable = !this.enableDropTable;
  }

  dropTable = (event: CdkDragDrop<string[]>) => {
    moveItemInArray(this.memberDetail.members, event.previousIndex, event.currentIndex);
  }

  // 选择部门
  private generateTree(arr: NzTreeNodeOptions[]): NzTreeNodeOptions[] {
    const tree: NzTreeNodeOptions[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mappedArr: any = {};
    let arrElem: NzTreeNodeOptions;
    let mappedElem: NzTreeNodeOptions;

    for (let i = 0, len = arr.length; i < len; i++) {
      arrElem = arr[i];
      mappedArr[arrElem['id']] = { ...arrElem };
      mappedArr[arrElem['id']].children = [];
    }

    for (const id in mappedArr) {
      if (mappedArr.hasOwnProperty(id)) {
        mappedElem = mappedArr[id];
        if (mappedElem['parentid']) {
          mappedArr[mappedElem['parentid']].children.push(mappedElem);
        } else {
          tree.push(mappedElem);
        }
      }
    }
    return tree;
  }

  handleShowDepartmentModal = () => {
    this.departmentModalVisible = true;
  }

  handleCancelDepartmentModal = () => {
    this.departmentModalVisible = false;
  }

  handleOkDepartmentModal = () => {
    this.departmentModalVisible = false;
  }

  treeCheckBoxChange(event: NzFormatEmitEvent, onItemSelect: (item: NzTreeNodeOptions) => void): void {
    this.checkBoxChange(event.node!, onItemSelect);
  }

  checkBoxChange(node: NzTreeNode, onItemSelect: (item: NzTreeNodeOptions) => void): void {
    if (node.isDisabled) {
      return;
    }

    if (node.isChecked) {
      this.checkedNodeList.push(node);
    } else {
      const idx = this.checkedNodeList.indexOf(node);
      if (idx !== -1) {
        this.checkedNodeList.splice(idx, 1);
      }
    }
    const item = this.list.find(w => w['id'] === node.origin['id']);
    onItemSelect(item!);
  }

  filterOption(inputValue: string, item: any): boolean {
    return item.title.indexOf(inputValue) > -1;
  }

  searchTransfer = (ret: { direction: string, value: string }) => {
    console.log('nzSearchChange', ret);
    this.departmentFilterValue = ret.value;
  }

  selectTransfer(ret: {}): void {
    // console.log('nzSelectChange', ret);
  }

  changeTransfer = (ret: TransferChange) => {
    const isDisabled = ret.to === 'right';
    this.checkedNodeList.forEach(node => {
      node.isDisabled = isDisabled;
      node.isChecked = isDisabled;
    });
  }

  changeSearchMember = (value: string) => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.searchLoading = true;
    this.timer = setTimeout(async () => {
      console.log(value)
      // TODO search
      this.searchLoading = false;
      this.searchResult = {
        departments: [
          { name: '移动端对接测试' },
          { name: '统一门户测试框架' },
          { name: '人力资源和社会保障测试' },
        ],
        members: [
          { name: 'OA测试一号' },
          { name: 'OA测试二号' },
          { name: '人力资源和社会保障测试' },
          { name: '洪佳' },
          { name: '何鑫' },
          { name: '姚宇峰' },
        ]
      };
    }, 500)
  }

}
