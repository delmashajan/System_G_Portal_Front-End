import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListSurgeriesComponent } from './list-surgeries.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiService } from '../api.service';
import { of, throwError } from 'rxjs';
import { Location } from '@angular/common';

class MockLocation {
  reload(): void {
    // Mock implementation
  }
}

describe('ListSurgeriesComponent', () => {
  let component: ListSurgeriesComponent;
  let fixture: ComponentFixture<ListSurgeriesComponent>;
  let apiService: ApiService;
  let location: MockLocation;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSurgeriesComponent, NavbarComponent],
      providers: [ApiService, { provide: Location, useClass: MockLocation }],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSurgeriesComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    location = TestBed.inject(Location) as unknown as MockLocation; // Casting to MockLocation

    spyOn(location, 'reload');
  });

  it('should filter surgeries by date and reload the component', fakeAsync(() => {
    const mockDate = '2023-05-25';
    const mockFilteredSurgeries = ['Filtered Surgery 1', 'Filtered Surgery 2'];

    spyOn(apiService, 'dateFilter').and.returnValue(of(mockFilteredSurgeries));

    component.dateFilterClick(mockDate);
    tick();

    expect(apiService.dateFilter).toHaveBeenCalledWith(mockDate);
    expect(component.date).toEqual('date');
    expect(component.filterDate).toEqual(mockFilteredSurgeries);
    expect(location.reload).toHaveBeenCalled();

    fixture.detectChanges(); // Update the component after reloading

    // Add additional expectations based on the expected behavior after reloading the component
  }));

  it('should handle error when filtering surgeries by date', fakeAsync(() => {
    const mockDate = '2023-05-25';
    const mockErrorMessage = 'Error occurred while filtering surgeries.';

    spyOn(apiService, 'dateFilter').and.returnValue(throwError(mockErrorMessage));

    component.dateFilterClick(mockDate);
    tick();

    expect(apiService.dateFilter).toHaveBeenCalledWith(mockDate);
    expect(component.date).toEqual('date');
    expect(component.filterDate).toBeUndefined();
    expect(location.reload).not.toHaveBeenCalled();

    fixture.detectChanges(); // Update the component

    // Add additional expectations based on the expected error handling behavior
  }));
});























