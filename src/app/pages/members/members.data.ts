export const listData = [
  { key: '1', id: '1', title: '苏州市相城区（693人）', icon: 'cluster' },
  { key: '1-1', id: '1-1', parentid: '1', title: '区委（2人）', icon: 'folder' },
  { key: '1-2', id: '1-2', parentid: '1', title: '人大（2人）', icon: 'folder' },
  { key: '1-3', id: '1-3', parentid: '1', title: '区政府（4人）', icon: 'folder' },
  { key: '1-3-1', id: '1-3-1', parentid: '1-3', title: '政府办（4人）', icon: 'folder' },
  { key: '1-3-1-1', id: '1-3-1-1', parentid: '1-3-1', title: '政府事务服务中心', isLeaf: true, icon: 'folder' },
  { key: '1-3-1-2', id: '1-3-1-2', parentid: '1-3-1', title: '政府事务服务中心', isLeaf: true, icon: 'folder' },
  { key: '1-3-1-3', id: '1-3-1-3', parentid: '1-3-1', title: '政府事务服务中心', isLeaf: true, icon: 'folder' },
  { key: '1-3-1-4', id: '1-3-1-4', parentid: '1-3-1', title: '政府事务服务中心', isLeaf: true, icon: 'folder' },

  { key: '2', id: '2', title: '苏州市相城区（693人）', icon: 'cluster' },
  { key: '2-1', id: '2-1', parentid: '2', title: '区委（2人）', icon: 'folder' },
  { key: '2-2', id: '2-2', parentid: '2', title: '人大（2人）', icon: 'folder' },
  { key: '2-3', id: '2-3', parentid: '2', title: '区政府（4人）', icon: 'folder' },
  { key: '2-3-1', id: '2-3-1', parentid: '2-3', title: '政府办（4人）', icon: 'folder' },
  { key: '2-3-1-1', id: '2-3-1-1', parentid: '2-3-1', title: '政府事务服务中心', isLeaf: true, icon: 'folder' },
  { key: '2-3-1-2', id: '2-3-1-2', parentid: '2-3-1', title: '政府事务服务中心', isLeaf: true, icon: 'folder' },
  { key: '2-3-1-3', id: '2-3-1-3', parentid: '2-3-1', title: '政府事务服务中心', isLeaf: true, icon: 'folder' },
  { key: '2-3-1-4', id: '2-3-1-4', parentid: '2-3-1', title: '政府事务服务中心', isLeaf: true, icon: 'folder' },
];

export const detailData = {
  title: '政府办',
  breadcrumb: ['苏州市相城区', '区政府', '政府办'],
  department: [
    { name: '政府事务服务中心', number: 0 },
    { name: '政府事务服务中心', number: 1 },
    { name: '政府事务服务中心', number: 2 },
    { name: '政府事务服务中心', number: 3 },
    { name: '政府事务服务中心', number: 4 },
    { name: '政府事务服务中心', number: 5 },
  ],
  members: [
    { id: '1', name: '徐子豪', exclusive: true, enterpriseEmail: '', position: '', no: '', mobile: '13962105171', email: '' },
    { id: '2', name: '辰三合', exclusive: true, enterpriseEmail: '', position: '', no: '', mobile: '13962105171', email: '' },
    { id: '3', name: '徐子豪', exclusive: true, enterpriseEmail: '', position: '', no: '', mobile: '13962105171', email: '' },
    { id: '4', name: '辰三合', exclusive: true, enterpriseEmail: '', position: '', no: '', mobile: '13962105171', email: '' },
  ]
};
