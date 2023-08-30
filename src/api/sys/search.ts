import { searchList } from '@/api/sys/fakedata';
import { SalesCardItem } from '@/views/dashboard/analysis/data';

export function reqSearchData(): SalesCardItem[] {
  window.console.log('reqSearchData');
  return searchList;
}
