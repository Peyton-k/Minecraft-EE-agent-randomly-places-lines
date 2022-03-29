player.onChat("run", function () {
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    for (let index = 0; index < 100; index++) {
        agent.move(FORWARD, randint(1, 10))
        agent.setItem(COBBLESTONE, 10, 1)
        if (randint(0, 1) == 0) {
            agent.turn(LEFT_TURN)
        } else {
            agent.turn(RIGHT_TURN)
        }
        if (agent.detect(AgentDetection.Block, FORWARD)) {
            if (randint(2, 3) == 2) {
                agent.move(UP, randint(2, 5))
                if (agent.detect(AgentDetection.Block, UP)) {
                    agent.destroy(UP)
                }
            } else {
                agent.move(DOWN, randint(2, 5))
                if (agent.detect(AgentDetection.Block, DOWN)) {
                    agent.destroy(DOWN)
                }
            }
        }
    }
})
