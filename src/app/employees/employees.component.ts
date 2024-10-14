import { Component, OnInit, inject } from '@angular/core';
import { EmployeeService } from "../service/employee.service";
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';
import { Employee } from "../model/employee";

@Component({
    selector: 'app-employee-list',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class EmployeesComponent implements OnInit {
  employeeList: Employee[] = [];  // Store employee data after processing
  private empService = inject(EmployeeService);  // Dependency injection of the service

  ngOnInit(): void {
    this.loadEmployeeData();
  }

  private loadEmployeeData(): void {
    // Fetching employees data from the service
    this.empService.getEmployees().subscribe(employeeRecords => {
      // Iterate over employee records to process each entry
      this.employeeList = employeeRecords.map(record => {
        const dobString = record.dateOfBirth.toString().slice(18, 28);  // Extract relevant part of timestamp
        const dobMilliseconds = (parseInt(dobString, 10) + (3600 * 4)) * 1000;  // Convert timestamp and adjust for timezone
        const formattedDate = new Date(dobMilliseconds);  // Create Date object
        record.dateOfBirth = formattedDate;  // Assign the formatted date back to the employee object
        return { ...record };  // Return the updated employee object
      });
      console.log(this.employeeList);  // Log the processed employee list to console
    });
  }
}
