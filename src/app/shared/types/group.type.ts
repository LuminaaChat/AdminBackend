import {Tenant} from "./tenant.type";
import {User} from "./user.type";

export type Group = {
  _id: string;
  __v: number;
  name: string;
  description: string;
  color: string;
  icon: string;
  division: Tenant | string;
  owners: User[];
  members: User[];
  channels: string[];
  minRole: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
