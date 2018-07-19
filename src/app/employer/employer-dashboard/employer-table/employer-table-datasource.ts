import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface EmployerTableItem {
  jobName: string;
  salary: number;
  datePosted: string;
  jobType: string;
  studentsApplied: string;
}

// Bring in persisting data to the employer-dashboard table so it is pulling from the data base.

// TESTING: 
// Perform a unit test where you build out a test in the spec file and utilize Jasmine to perform the test. Go here: https://angular.io/guide/testing to walk through testing.

// Unit testing will be required for both orange and red ticket items.

// fetchExpenses = () => {
//   fetch(`${APIURL}/api/expenses`, {
//       method: "GET",
//       headers: new Headers({
//           "Content-Type": "application/json",
//           "Authorization": this.props.setTokenFromSplash
//       })
//   })
//       .then(res => res.json())
//       .then((returnedData) => {
//           employerTableArray: returnedData 
//       })
//       .catch(err => console.log(err.message))
// }

// TODO: replace this with real data from your application
// THIS TABLE WILL BE POPULATED FROM THE DATABASE
const employerTableArray: EmployerTableItem[] = [
  {jobName: "jobName1", salary: 500, datePosted: "MM/DD/YYYY1", jobType: "jobType1", studentsApplied: "studentsApplied1"},
  {jobName: "jobName2", salary: 500, datePosted: "MM/DD/YYYY2", jobType: "jobType2", studentsApplied: "studentsApplied2"}
];

/**
 * Data source for the EmployerTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EmployerTableDataSource extends DataSource<EmployerTableItem> {
  data: EmployerTableItem[] = employerTableArray;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<EmployerTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: EmployerTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: EmployerTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'jobName': return compare(a.jobName, b.jobName, isAsc);
        case 'salary': return compare(+a.salary, +b.salary, isAsc); // ADDED + FOR NUMBER
        case 'datePosted': return compare(a.datePosted, b.datePosted, isAsc);
        case 'jobType': return compare(a.jobType, b.jobType, isAsc);
        case 'studentsApplied': return compare(a.studentsApplied, b.studentsApplied, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
