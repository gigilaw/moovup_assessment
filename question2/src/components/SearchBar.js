import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';

const SearchBar = ({ allFriends }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleSearch = (_, friend) => {
    navigate(`/friends/${friend._id}`, { state: { friend } });
  };

  return (
    <Autocomplete
      id="search_bear"
      getOptionLabel={(allFriends) =>
        `${allFriends.name.first} ${allFriends.name.last}`
      }
      options={allFriends}
      sx={{ width: 250 }}
      noOptionsText={'Bear not found'}
      renderInput={(params) => (
        <TextField {...params} label="Search" variant="standard" />
      )}
      open={open}
      onInputChange={(_, value) => {
        value.length === 0 ? setOpen(false) : setOpen(true);
      }}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
