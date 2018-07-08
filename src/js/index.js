import { h, app } from "hyperapp"

const IMG_DIR = "images"
const DUCK_IMG = "ishino_last.png"

const IMG_WIDTH = 100

const INITIAL_MESSAGE = "おはようございます！"

const MESSAGESS = [
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
      if (state.message) return <p style={{background: "#DDD", color: "#333"}}>{state.message}</p>
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