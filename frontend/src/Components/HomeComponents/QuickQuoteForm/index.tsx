import React from "react";
import {
  Card,
  Divider,
  Grid,
  TextField,
  CardContent,
  Button,
} from "@mui/material";
import { ICreateQuote } from "../../../Services/Quote/IQuotes";
import { CardTitle } from "../../GlobalStyles";

interface IProps {
  form: ICreateQuote;
  setForm: (form: ICreateQuote) => void;
  name: string;
  handleQuoteForm: () => void;
}
const QuickQuoteForm = ({ form, setForm, name, handleQuoteForm }: IProps) => {
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Card sx={{ height: 430 }}>
        <CardTitle color="text.secondary" gutterBottom>
          Quick Quote
        </CardTitle>
        <Divider />
        <CardContent>
          <form>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="departureLocation"
                  name="departureLocation"
                  label="FROM"
                  variant="filled"
                  onChange={handleForm}
                  value={form.departureLocation}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="destinationLocation"
                  name="destinationLocation"
                  label="DESTINATION"
                  variant="filled"
                  value={form.destinationLocation}
                  onChange={handleForm}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="departDate"
                  name="departDate"
                  label="DEPART DATE"
                  variant="filled"
                  value={form.departDate}
                  onChange={handleForm}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  value={form.returnDate}
                  id="returnDate"
                  name="returnDate"
                  label="RETURN DATE"
                  variant="filled"
                  onChange={handleForm}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  value={form.numberTravellers}
                  id="numberTravellers"
                  name="numberTravellers"
                  label="PEOPLE"
                  variant="filled"
                  onChange={handleForm}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  value={form.transportation}
                  id="transportation"
                  name="transportation"
                  label="TRANSPORTATION"
                  onChange={handleForm}
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="name"
                  label="NAME"
                  disabled
                  variant="filled"
                  onChange={handleForm}
                  value={name}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6} textAlign="center" margin="auto 0">
                <Button
                  variant="contained"
                  onClick={() => handleQuoteForm()}
                  fullWidth
                  sx={{
                    backgroundColor: "#5BBFBA",
                    height: 50,
                    borderRadius: 50,
                  }}
                >
                  Create a Quote
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export { QuickQuoteForm };
