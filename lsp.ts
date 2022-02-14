class Employee {
    protected permissions = new Set<string>();
   
    public addPermission(permissionName: string) {
      return this.permissions.add(permissionName);
    }
  }
  class Cashier extends Employee {
    public addPermission(permissionName: string) {
      if (permissionName === 'deleteProducts') {;
        throw new Error(
          'Cashier should not be able to delete products!'
        );
      }
      return this.permissions.add(permissionName);
    }
  }


  const employee = new Employee();
employee.addPermission('deleteProducts');