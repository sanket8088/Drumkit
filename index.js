$(document).ready(() => {



    const playMusic = (id, myUrl) => {
        console.log(myUrl)
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
        console.log(e.key)
        if (e.key == "a") {
            playMusic("buttonA", "clap")
        }
        else if (e.key == "s") {
            playMusic("buttonS", "hihat")
        }

        else if (e.key == "d") {
            playMusic("buttonD", "kick")
        }

        else if (e.key == "f") {
            playMusic("buttonF", "openhat")
        }

        else if (e.key == "g") {
            playMusic("buttonG", "boom")
        }

        else if (e.key == "h") {
            playMusic("buttonH", "ride")
        }

        else if (e.key == "j") {
            playMusic("buttonJ", "snare")
        }
        else if (e.key == "k") {
            playMusic("buttonK", "tom")
        }
        else if (e.key == "l") {
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