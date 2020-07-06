$(document).ready(() => {



    const playMusic = (id, myUrl) => {
        $(".button").css("border", "2px solid #ccc")
        $(".button").css("transform", "scale3d(1,1,1")
        $("#" + id).css("border", "2px solid red")
        $("#" + id).css("transform", "scale3d(1.2,1.2,1.2")
        setTimeout(() => {
            $("#" + id).css("border", "2px solid #ccc")
            $("#" + id).css("transform", "scale3d(1,1,1")

        }, 500);
        $("#audio-player").attr("src", "./Drumset Audio Files/" + myUrl + ".wav")
        $("#audio-player")[0].play()


    }

    $("body").keypress(e => {
        eValue = e.key.toLowerCase()
        if (eValue == "a") {
            playMusic("buttonA", "clap")
        }
        else if (eValue == "s") {
            playMusic("buttonS", "hihat")
        }

        else if (eValue == "d") {
            playMusic("buttonD", "kick")
        }

        else if (eValue == "f") {
            playMusic("buttonF", "openhat")
        }

        else if (eValue == "g") {
            playMusic("buttonG", "boom")
        }

        else if (eValue == "h") {
            playMusic("buttonH", "ride")
        }

        else if (eValue == "j") {
            playMusic("buttonJ", "snare")
        }
        else if (eValue == "k") {
            playMusic("buttonK", "tom")
        }
        else if (eValue == "l") {
            playMusic("buttonL", "tink")
        }
    })

    $("#buttonA").click(() => {
        playMusic("buttonA", "clap")
    })

    $("#buttonS").click(() => {
        playMusic("buttonS", "hihat")
    })

    $("#buttonD").click(() => {
        playMusic("buttonD", "kick")
    })

    $("#buttonF").click(() => {
        playMusic("buttonF", "openhat")
    })

    $("#buttonG").click(() => {
        playMusic("buttonG", "boom")
    })

    $("#buttonH").click(() => {
        playMusic("buttonH", "ride")
    })

    $("#buttonJ").click(() => {
        playMusic("buttonJ", "snare")
    })

    $("#buttonK").click(() => {
        playMusic("buttonK", "tom")
    })

    $("#buttonL").click(() => {
        playMusic("buttonL", "tink")
    })





})