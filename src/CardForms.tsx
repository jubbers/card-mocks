import { CardForm } from "~types"

const defaultForm: CardForm = {
  height: 700,
  width: 500,
  backgroundColor: '#FFFFFF',
  padding: 16,
  templateName: '',

  components: [],
  scaledCard: { y: -1, x: -1 },
}

// TODO: Add default forms for variations of basic form 
//       (e.g. poker/horizontal/etc)

export default defaultForm