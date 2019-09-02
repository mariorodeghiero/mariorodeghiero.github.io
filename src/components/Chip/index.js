import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

export default function ChipsArray() {
  const classes = useStyles()
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "React" },
    { key: 1, label: "JavaScript" },
    { key: 2, label: "styled-components" },
    { key: 3, label: "CSS" },
    { key: 4, label: "SASS" },
    { key: 5, label: "HTML" },
    { key: 6, label: "webpack" },
    { key: 6, label: "VS_Code" },
    { key: 7, label: "Gulp" },
    { key: 7, label: "storybook" },
    { key: 8, label: "Jira" },
    { key: 8, label: "Git/Github" },
  ])

  const handleDelete = chipToDelete => () => {
    if (chipToDelete.label === "React") {
      alert("Why would you want to delete React?! :)")
      return
    }

    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))
  }

  return (
    <div className={classes.root}>
      {chipData.map(data => {
        let icon

        return (
          <Chip
            key={data.key}
            icon={icon}
            label={data.label}
            // onDelete={handleDelete(data)}
            className={classes.chip}
          />
        )
      })}
    </div>
  )
}
