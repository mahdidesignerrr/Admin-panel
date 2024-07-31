import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
   border: 2px solid #33383fa3;
   background-color: var(--color-grey-0);
   box-shadow: var(--shadow-sm);
   backdrop-filter: var(--filter-blur-md);
   border-radius: var(--border-radius-lg);
   padding: 0.5rem;
   display: flex;
   max-width: 225px;
   max-height: 50px;
   flex-direction: row-reverse;
   gap: 1rem;
   @media screen and (max-width: 480px) {
      background-color: transparent;
      backdrop-filter: none;
      border: 0px;
   }
`;

const FilterButton = styled.button`
   background-color: var(--color-grey-0);
   border: none;
   box-shadow: var(--shadow-inset);

   ${({ $isActive }) =>
      $isActive &&
      css`
         background-color: var(--color-brand-600);
         color: var(--color-grey-900);
         cursor: auto;
      `}

   border-radius: var(--border-radius-lg);
   font-weight: 500;
   font-size: 1.5rem;
   padding: 1rem 1.5rem;
   transition: all 0.4s ease-out;
   display: flex;
   justify-content: center;
   align-items: center;
   &:not(:disabled) {
      color: var(--color-grey-600);
   }

   &:hover:not(:disabled) {
      box-shadow: var(--shadow-inset-bot);
      color: var(--color-grey-900);
   }
`;

function Filter({ filterField, options }) {
   const [searchParams, setSearchParams] = useSearchParams();
   const currentFilter = searchParams.get(filterField) || options.at(1).value;

   function handleClick(value) {
      searchParams.set(filterField, value);
      if (searchParams.get("page")) searchParams.set("page", 1);

      setSearchParams(searchParams);
   }

   return (
      <StyledFilter>
         {options.map((option) => (
            <FilterButton
               key={option.value}
               onClick={() => handleClick(option.value)}
               $isActive={option.value === currentFilter}
               disabled={option.value === currentFilter}
            >
               {option.label}
            </FilterButton>
         ))}
      </StyledFilter>
   );
}

export default Filter;
