export type Tenant = {
  _id: string;
  __v: number;
  name: string;
  description: string;
  color: string;
  icon: string;
  owners: string[];
  members: string[];
  minRole: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
