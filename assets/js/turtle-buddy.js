document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('turtle-buddy');
    var sprite = document.getElementById('turtle-sprite');
    if (!button || !sprite) return;

    var base = sprite.getAttribute('src').replace(/turtle_idle_1\.png$/, '');
    var frames = {
        idle: [base + 'turtle_idle_1.png', base + 'turtle_idle_2.png'],
        right: [base + 'turtle_right_1.png', base + 'turtle_right_2.png'],
        left: [base + 'turtle_left_1.png', base + 'turtle_left_2.png']
    };

    var speed = 160; // px per second while walking
    var idleTimer = null;
    var stepTimer = null;
    var walking = false;

    function animateFrames(sequence) {
        var i = 0;
        sprite.src = sequence[0];
        return setInterval(function () {
            i++;
            sprite.src = sequence[i % sequence.length];
        }, 200);
    }

    function startIdle() {
        idleTimer = animateFrames(frames.idle);
    }

    function stopIdle() {
        clearInterval(idleTimer);
    }

    button.addEventListener('click', function () {
        if (walking) return;
        walking = true;
        stopIdle();

        var social = document.querySelector('.social-links');
        var startRect = button.getBoundingClientRect();
        var endRect = social.getBoundingClientRect();
        var distance = Math.max(0, endRect.left - startRect.right - 12);
        var duration = distance / speed;

        stepTimer = animateFrames(frames.right);
        button.style.transition = 'transform ' + duration + 's linear';
        button.style.transform = 'translateX(' + distance + 'px)';

        button.addEventListener('transitionend', function walkBack() {
            button.removeEventListener('transitionend', walkBack);
            clearInterval(stepTimer);
            stepTimer = animateFrames(frames.left);
            button.style.transform = 'translateX(0px)';

            button.addEventListener('transitionend', function arrived() {
                button.removeEventListener('transitionend', arrived);
                clearInterval(stepTimer);
                walking = false;
                startIdle();
            });
        });
    });

    startIdle();
});
