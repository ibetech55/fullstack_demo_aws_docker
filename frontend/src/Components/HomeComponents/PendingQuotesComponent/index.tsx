import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Card, CardContent, Typography, Divider } from "@mui/material";
import { IGetQuotes } from "../../../Services/Quote/IQuotes";
import { Link } from "react-router-dom";
import { CardTitle } from "../../GlobalStyles";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID #",
    flex: 1,
    renderCell: (params) => (
      <Link to={`/${params.row.id}`}>{params.row.id}</Link>
    ),
  },
  {
    field: "firstName",
    headerName: "Name",
    flex: 1,
    renderCell: (params) => (
      <Typography>
        {params.row.contacts.firstName} {params.row.contacts.lastName}
      </Typography>
    ),
  },
  {
    field: "destinationLocation",
    headerName: "Destination",
    flex: 1,
  },
  {
    field: "Price",
    headerName: "Price",
    flex: 1,
    renderCell: (params) => (
      <Typography>$ {Number(params.row.price).toFixed(2)}</Typography>
    ),
  },
];
interface IProps {
  quotes: IGetQuotes[];
}

const PendingQuotesComponent = ({ quotes }: IProps) => {
  return (
    <div>
      <Card sx={{ height: 430 }}>
        <CardTitle color="text.secondary" gutterBottom>
          Pending Quotes
        </CardTitle>
        <Divider />
        <CardContent>
          {quotes ? (
            <DataGrid
              rows={quotes as IGetQuotes[]}
              columns={columns}
              rowHeight={30}
              hideFooterPagination
            />
          ) : (
            <h1>Loading...</h1>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export { PendingQuotesComponent };
