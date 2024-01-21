import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductsFilter from "./ProductsFilter";
import ProductsSort from "./ProductsSort";
import { CategoryOutlined, FilterAltOutlined } from "@mui/icons-material";

function CategorySidebar({ categories }) {
  return (
    <div className="col-span-4 md:col-span-1 flex gap-y-2 flex-row justify-between md:justify-start md:flex-col md:ml-6">
      <Accordion className="shadow-none">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="flex items-center gap-1">
            <CategoryOutlined fontSize="small" />
            <span>دسته بندی ها</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ProductsFilter categories={categories} />
        </AccordionDetails>
      </Accordion>

      <Accordion className="shadow-none">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="flex items-center gap-1">
            <FilterAltOutlined fontSize="small" />
            <span>مرتب سازی</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ProductsSort />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default CategorySidebar;
