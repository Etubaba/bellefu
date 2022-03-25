// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import GrTextAlignLeft from "react-icons/gr";
// import GrTextAlignCenter from 'react-icons/gr';
// import GrTextAlignRight from 'react-icons/gr';
// import GrTextAlignFull from 'react-icons/gr';
// import FaBold from 'react-icons/fa';
// import FaItalic from 'react-icons/fa';
// import MdOutlineFormatUnderlined from 'react-icons/md';
// import MdFormatColorFill from 'react-icons/md';
// import RiArrowDownSFill from 'react-icons/ri';
// import Divider from '@mui/material/Divider';
// import Paper from '@mui/material/Paper';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
//   '& .MuiToggleButtonGroup-grouped': {
//     margin: theme.spacing(0.5),
//     border: 0,
//     '&.Mui-disabled': {
//       border: 0,
//     },
//     '&:not(:first-of-type)': {
//       borderRadius: theme.shape.borderRadius,
//     },
//     '&:first-of-type': {
//       borderRadius: theme.shape.borderRadius,
//     },
//   },
// }));

// export default function CustomizedDividers() {
//   const [alignment, setAlignment] = React.useState('left');
//   const [formats, setFormats] = React.useState(() => ['italic']);

//   const handleFormat = (event, newFormats) => {
//     setFormats(newFormats);
//   };

//   const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };

//   return (
//     <div>
//       <Paper
//         elevation={0}
//         sx={{
//           display: 'flex',
//           border: (theme) => `1px solid ${theme.palette.divider}`,
//           flexWrap: 'wrap',
//         }}
//       >
//         <StyledToggleButtonGroup
//           size="small"
//           value={alignment}
//           exclusive
//           onChange={handleAlignment}
//           aria-label="text alignment"
//         >
//           <ToggleButton value="left" aria-label="left aligned">
//             <GrTextAlignLeft />
//           </ToggleButton>
//           <ToggleButton value="center" aria-label="centered">
//             <GrTextAlignCenter />
//           </ToggleButton>
//           <ToggleButton value="right" aria-label="right aligned">
//             <GrTextAlignRight />
//           </ToggleButton>
//           <ToggleButton value="justify" aria-label="justified" disabled>
//             <GrTextAlignFull />
//           </ToggleButton>
//         </StyledToggleButtonGroup>
//         <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
//         <StyledToggleButtonGroup
//           size="small"
//           value={formats}
//           onChange={handleFormat}
//           aria-label="text formatting"
//         >
//           <ToggleButton value="bold" aria-label="bold">
//             <FaBold />
//           </ToggleButton>
//           <ToggleButton value="italic" aria-label="italic">
//             <FaItalic />
//           </ToggleButton>
//           <ToggleButton value="underlined" aria-label="underlined">
//             <MdOutlineFormatUnderlined />
//           </ToggleButton>
//           <ToggleButton value="color" aria-label="color" disabled>
//             <MdFormatColorFill />
//             <RiArrowDownSFill />
//           </ToggleButton>
//         </StyledToggleButtonGroup>
//       </Paper>
//     </div>
//   );
// }
