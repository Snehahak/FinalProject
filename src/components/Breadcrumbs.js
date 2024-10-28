import { Breadcrumbs, Link, Typography } from '@mui/material';

const CustomBreadcrumbs = ({ path }) => (
  <Breadcrumbs aria-label="breadcrumb" sx={{ m: 2 }}>
    {path.map((item, index) => (
      <Link key={index} href={item.link} underline="hover">
        {item.name}
      </Link>
    ))}
    <Typography color="text.primary">Current</Typography>
  </Breadcrumbs>
);

export default CustomBreadcrumbs;
