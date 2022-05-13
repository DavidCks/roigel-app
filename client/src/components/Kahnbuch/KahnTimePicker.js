import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

const KahnTimePicker = ({caption = "", value, setValue}) => {
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label={caption}
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
      </LocalizationProvider>
  )
}

export default KahnTimePicker