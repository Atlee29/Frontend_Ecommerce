export class EmployeeDashboardSideManuRoles {

    public static sidemanuOptionsForEmployees:Array<any>=[
        {
            admin:[
                {lable : 'Add Employee',path : 'addemployee'},
                {lable : 'View Employee',path : 'viewemployee'},
                {lable : 'Add Dealer',path : 'adddealer'},
                {lable : 'View Dealer',path : 'viewdealer'},
            ],
            inventory:[
                {lable : 'Add Products',path : 'addproducts'},
                {lable : 'View Products',path : 'viewproducts'},
                {lable : 'update Products',path : 'updateproducts'},
            ]
        }
    ]

}
