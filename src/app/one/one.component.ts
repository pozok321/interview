import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

export interface Employee {
  id: number;
  nama: string;
  alamat: string;
  profesi: string;
  harga: string;
  img: string;
}

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  title = 'angular-material-autocomplete';

  employeeCtrl = new FormControl();
  filteredEmployee: Observable<Employee[]>;

  employees: Employee[] = [
    {
      id: 1,
      nama: 'DR. Santoso',
      alamat: 'Jakarta',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 2,
      nama: 'DR. Santoso',
      alamat: 'Jakarta',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 3,
      nama: 'DR. Santoso',
      alamat: 'Jakarta',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 4,
      nama: 'DR. Santoso',
      alamat: 'Jakarta',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 5,
      nama: 'DR. Santoso',
      alamat: 'Bekasi',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },

    {
      id: 6,
      nama: 'DR. Santoso',
      alamat: 'Bekasi',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 7,
      nama: 'DR. Santoso',
      alamat: 'Bekasi',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 8,
      nama: 'DR. Santoso',
      alamat: 'Bekasi',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 9,
      nama: 'DR. Santoso',
      alamat: 'Depok',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 10,
      nama: 'DR. Santoso',
      alamat: 'Depok',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 11,
      nama: 'DR. Gunawan',
      alamat: 'Depok',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 12,
      nama: 'DR. Gunawan',
      alamat: 'Depok',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 13,
      nama: 'DR. Gunawan',
      alamat: 'Bogor',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 14,
      nama: 'DR. Gunawan',
      alamat: 'Bogor',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 15,
      nama: 'DR. Gunawan',
      alamat: 'Bogor',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 16,
      nama: 'DR. Gunawan',
      alamat: 'Bogor',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 17,
      nama: 'DR. Gunawan',
      alamat: 'Tangerang',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 18,
      nama: 'DR. Gunawan',
      alamat: 'Tangerang',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 19,
      nama: 'DR. Gunawan',
      alamat: 'Tangerang',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 20,
      nama: 'DR. Santoso',
      alamat: 'Tangerang',
      profesi: 'Dokter Gigi',
      harga: '250.000',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
  ];

  constructor() {
    this.filteredEmployee = this.employeeCtrl.valueChanges.pipe(
      startWith(''),
      map((employee) =>
        employee ? this._filterEmployees(employee) : this.employees.slice()
      )
    );
  }

  private _filterEmployees(value: string): Employee[] {
    const filterValue = value.toLowerCase();

    return this.employees.filter(
      (state) => state.nama.toLowerCase().indexOf(filterValue) === 0
    );
  }

  onSave(nama: string) {
    localStorage.setItem('one', nama);
  }

  ngOnInit(): void {}
}
