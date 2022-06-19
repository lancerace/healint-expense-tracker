import React from 'react';
// prettier-ignore
import { Typography, Grid } from '@mui/material';
import style from './dashboard.module.css';
import ExpenseTable from '../../components/Table';
import { LineChart } from '../../components/Chart';
import { EExpensesType, expensesData } from '../../constants';

export default function Dashboard() {

    const labels: string[] = ['January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];

    const foodMonthlyExpenses: number[] = expensesData.filter(item => item.type === EExpensesType.FOOD).map(food => { return food.amount });
    const utilityMonthlyExpenses: number[] = expensesData.filter(item => item.type === EExpensesType.UTILITY).map(utility => { return utility.amount });
    const officeRentalMonthlyExpenses: number[] = expensesData.filter(item => item.type === EExpensesType.OFFICERENTAL).map(officeRental => { return officeRental.amount });

    const chartData = [
        {
            label: EExpensesType.UTILITY,
            data: utilityMonthlyExpenses,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: EExpensesType.FOOD,
            data: foodMonthlyExpenses,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: EExpensesType.OFFICERENTAL,
            data: officeRentalMonthlyExpenses,
            borderColor: 'rgba(138,43,226)',
            backgroundColor: 'rgba(138,43,226)',
        },];


    return (
        <Grid container>
            <Grid container alignItems="center" className={style.mainContainer}>
                <Grid item container justifyContent="center" alignItems="center">
                    <Typography variant="h3">Healint expense tracker</Typography>
                </Grid>

                <Grid container justifyContent="center" alignItems="center" className={style.statisticContainer}>
                    <Grid item lg={8} md={8} sm={12}>
                        <LineChart datasets={chartData} xAxisLabels={labels} title="Monthly Expenses"/>
                    </Grid>

                    <Grid item lg={8} md={8} sm={12}>
                        <ExpenseTable/>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}
