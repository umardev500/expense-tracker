import {IconName} from '@/components/custom-icon';

export type TrxCategory = {
  name: string;
  icon: IconName;
  iconColor: string;
  iconContainerColor: string;
  fill: boolean;
};

export type Transaction = {
  id: string;
  category: TrxCategory;
  description?: string;
  isExpense?: boolean;
  amount: number;
  date: string;
};
