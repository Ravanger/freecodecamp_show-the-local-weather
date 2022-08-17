import { DescriptionPropTypes } from "./Description.types"

const Description: React.FC<DescriptionPropTypes> = ({ description }) => {
  if (!description) return null
  return <p>{description}</p>
}

export default Description
