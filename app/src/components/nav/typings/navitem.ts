export default interface NavItem {
  id: number;
  name: string;
  display: boolean;
  children: any[];
  url: string;
  selected: boolean;
}
