import { WhereOptions } from 'sequelize';

export interface IQueryOption {
  where: WhereOptions<any>;
  limit?: number;
  offset?: number;
  scope?: string[];
  order?: any[];
  attributes?: any[];
  includes?: any[];
  distinct?: boolean;
  paranoid?: boolean;
  transaction?: any;

  [key: string]: any;
}

export interface ICrudExecOption {
  allowNull?: boolean;
}
