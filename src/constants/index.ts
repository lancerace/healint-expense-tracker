
export enum EExpensesType {
    FOOD = 'Food',
    UTILITY = 'Utility',
    OFFICERENTAL = 'OfficeRental'
}

export interface IExpense {
    type: 'Utility' | 'Food' | 'OfficeRental';
    amount: number;
    date: string;
}


//order by monthly for year 2022
export const expensesData: IExpense[] = [
    {
        type: "Utility",
        amount: 1340.50,
        date: "1642226646"
    },
    {
        type: "Utility",
        amount: 940.50,
        date: "1644905046"
    },
    {
        type: "Utility",
        amount: 1540.50,
        date: "1647324246"//march
    },
    {
        type: "Utility",
        amount: 2640.50,
        date: "1650002646"
    },
    {
        type: "Utility",
        amount: 1740.50,
        date: "1652594646"//may
    },
    {
        type: "Utility",
        amount: 1840.50,
        date: "1655273046"//june
    },
    {
        type: "Utility",
        amount: 1540.50,
        date: "1657865046"
    },
    {
        type: "Utility",
        amount: 1240.50,
        date: "1660543446"//Aug
    },
    {
        type: "Utility",
        amount: 1940.50,
        date: "1647324246" //Sep
    },
    {
        type: "Utility",
        amount: 1340.50,
        date: "1665813846" //Oct
    },
    {
        type: "Utility",
        amount: 1740.50,
        date: "1668492246" //Nov
    },
    {
        type: "Utility",
        amount: 3840.50,
        date: "1671084246" //Dec
    },

    {
        type: "Food",
        amount: 10.50,
        date: "1642226646"
    },
    {
        type: "Food",
        amount: 20.50,
        date: "1644905046"
    },
    {
        type: "Food",
        amount: 30.50,
        date: "1647324246"//march
    },
    {
        type: "Food",
        amount: 40.50,
        date: "1650002646"
    },
    {
        type: "Food",
        amount: 50.50,
        date: "1652594646"//may
    },
    {
        type: "Food",
        amount: 100.50,
        date: "1655273046"//june
    },
    {
        type: "Food",
        amount: 400.50,
        date: "1657865046"
    },
    {
        type: "Food",
        amount: 500.50,
        date: "1660543446"//Aug
    },
    {
        type: "Food",
        amount: 640.50,
        date: "1647324246" //Sep
    },
    {
        type: "Food",
        amount: 340.50,
        date: "1665813846" //Oct
    },
    {
        type: "Food",
        amount: 1140.50,
        date: "1668492246" //Nov
    },
    {
        type: "Food",
        amount: 1600.50,
        date: "1671084246" //Dec
    },

    {
        type: "OfficeRental",
        amount: 6010.50,
        date: "1642226646"
    },
    {
        type: "OfficeRental",
        amount: 5020.50,
        date: "1644905046"
    },
    {
        type: "OfficeRental",
        amount: 6530.50,
        date: "1647324246"//march
    },
    {
        type: "OfficeRental",
        amount: 4440.50,
        date: "1650002646"
    },
    {
        type: "OfficeRental",
        amount: 6350.50,
        date: "1652594646"//may
    },
    {
        type: "OfficeRental",
        amount: 3100.50,
        date: "1655273046"//june
    },
    {
        type: "OfficeRental",
        amount: 5400.50,
        date: "1657865046"
    },
    {
        type: "OfficeRental",
        amount: 6500.50,
        date: "1660543446"//Aug
    },
    {
        type: "OfficeRental",
        amount: 8640.50,
        date: "1647324246" //Sep
    },
    {
        type: "OfficeRental",
        amount: 9340.50,
        date: "1665813846" //Oct
    },
    {
        type: "OfficeRental",
        amount: 9140.50,
        date: "1668492246" //Nov
    },
    {
        type: "OfficeRental",
        amount: 9600.50,
        date: "1671084246" //Dec
    }
]