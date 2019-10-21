import PropTypes from "prop-types"
import React, { useState } from "react"
import { MdFilterList } from "react-icons/md";
import { Tooltip } from 'reactstrap';
import Chip from '../Chip'
import * as S from "./styled"

const Header = ({ siteTitle }) => {
  const [openFilter, setFilter] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <S.Header>
      <S.Container>
        <S.ChipBox>
          {openFilter && <Chip />}
        </S.ChipBox>
        <S.FilterBox>
          <MdFilterList size={24} id="filter" onClick={() => setFilter(!openFilter)} style={{ outline: 0 }} />
          <Tooltip placement="left" isOpen={tooltipOpen} autohide={false} target="filter" toggle={toggle}>
            Filter
          </Tooltip>
        </S.FilterBox>
      </S.Container>
    </S.Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
