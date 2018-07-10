import { h, app } from "hyperapp"

const IMG_DIR = "images"
const DUCK_IMG = "ishino_last.png"

const IMG_WIDTH = 100

const INITIAL_MESSAGE = "おはようございます！"

const MESSAGES = [
  "おつかれさまです！",
  "がんばってください！"
]

const state = {
  position: {
    x: 0,
    y: 0
  },
  message: INITIAL_MESSAGE
}

const getRandomMessage = () => (
  MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
)

const actions = {
  setPosition: (position) => ({position: position}),
  setMessage: (message) => ({message: message}),
  start: () => (state, actions) => {
    console.log("start")
    setInterval(
      () => actions.setMessage(getRandomMessage()),
      1000 * 60 * 60
    )
  }
}

const Message = ({message}) => (
  <div
    style={{
      "font-family": "Gulim, sans-serif",
      position: "relative",
      display: "table-cell",
      width: 90,
      height: 90,
      background: "#70a6ff",
      "border-radius": "50%",
      color: "#EEE",
      "vertical-align": "middle",
      "text-align": "center",
      opacity: 0.8
    }}>
    <p>
      {message}
    </p>
    <div
      style={{
        position: "absolute",
        bottom: -18,
        left: "50%",
        border: "10px solid transparent",
        "border-top": "15px solid #70a6ff",
        "margin-left": -10
      }}>
    </div>
  </div>
)

const Duck = () => (state, actions) => (
  <div
    oncreate={actions.start}
    style={{
      position: "absolute",
      right: state.position.x,
      bottom: state.position.y,
    }}
  >
    {() => {
      if (state.message) return <Message message={state.message} />
      return null
    }}
    <a href="javascript:void(0)">
      <img
        src={`${IMG_DIR}/${DUCK_IMG}`} width={IMG_WIDTH}
      />
    </a>
  </div>
)

const view = (state, actions) => (
  <main>
    <Duck />
  </main>
)

const main = app(state, actions, view, document.body)
