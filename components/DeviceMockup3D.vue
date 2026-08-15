<template>
  <div class="device-mockup-wrapper group">
    <div class="mockup-container">
      <!-- Laptop Mockup (MacBook style) -->
      <div class="laptop-device">
        <!-- Screen logic -->
        <div class="laptop-lid">
          <div class="laptop-screen">
            <div class="screen-notch"></div>
            <!-- Live Component for Desktop -->
            <div class="w-[1280px] h-[800px] origin-top-left bg-white dark:bg-slate-900" style="transform: scale(0.39)">
              <ClientOnly>
                <PrompChatMockup :embedded="true" />
              </ClientOnly>
            </div>
          </div>
        </div>
        <!-- Base logic -->
        <div class="laptop-base">
          <div class="keyboard-area"></div>
          <div class="trackpad"></div>
        </div>
      </div>

      <!-- Phone Mockup (iPhone style) -->
      <div class="phone-device">
        <div class="phone-frame">
          <div class="phone-screen">
            <div class="phone-dynamic-island"></div>
            <!-- Live Component for Mobile -->
            <div class="w-[375px] h-[812px] origin-top-left bg-white dark:bg-slate-900" style="transform: scale(0.34)">
              <ClientOnly>
                <PrompChatMockup :embedded="true" />
              </ClientOnly>
            </div>
          </div>
          <!-- Buttons and Details -->
          <div class="phone-button volume-up"></div>
          <div class="phone-button volume-down"></div>
          <div class="phone-button power"></div>
        </div>
      </div>

      <!-- Floating Elements for depth -->
      <div class="floating-blob blur-2xl opacity-20 bg-primary"></div>
    </div>
  </div>
</template>

<style scoped>
.device-mockup-wrapper {
  perspective: 2000px;
  width: 100%;
  max-width: 800px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
}

.mockup-container {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s cubic-bezier(0.2, 0.4, 0.2, 1);
  /* Initial tilt matching the reference image roughly */
  transform: rotateY(-15deg) rotateX(10deg);
}

.device-mockup-wrapper:hover .mockup-container {
  /* Semi-turn animation on hover */
  transform: rotateY(15deg) rotateX(5deg);
}

/* Laptop Design - Detailed */
.laptop-device {
  position: absolute;
  top: 45%;
  left: 40%;
  transform: translate(-50%, -50%) rotateY(10deg);
  width: 500px;
  transform-style: preserve-3d;
}

.laptop-lid {
  width: 100%;
  height: 320px;
  background: #333;
  border-radius: 12px 12px 2px 2px;
  padding: 10px;
  position: relative;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.laptop-screen {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}

.screen-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 18px;
  background: #000;
  border-radius: 0 0 8px 8px;
  z-index: 10;
}

.laptop-base {
  width: 104%;
  height: 12px;
  background: linear-gradient(to bottom, #444 0%, #222 100%);
  margin-left: -2%;
  border-radius: 0 0 20px 20px;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

/* Phone Design - Detailed */
.phone-device {
  position: absolute;
  top: 60%;
  left: 78%;
  transform: translate(-50%, -50%) translateZ(120px) rotateY(-15deg) rotateX(5deg) scale(1.1);
  width: 140px;
  height: 280px;
  z-index: 50;
  transform-style: preserve-3d;
  animation: float-phone 6s ease-in-out infinite;
}

.phone-frame {
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  border-radius: 34px;
  padding: 8px;
  border: 3px solid #333;
  box-shadow:
    -20px 20px 50px rgba(0, 0, 0, 0.4),
    inset 0 0 10px rgba(255, 255, 255, 0.05);
  position: relative;
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
}

.phone-dynamic-island {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 45px;
  height: 14px;
  background: #000;
  border-radius: 10px;
  z-index: 10;
}

.phone-button {
  position: absolute;
  background: #333;
  width: 3px;
  border-radius: 2px 0 0 2px;
}

.volume-up {
  top: 60px;
  left: -5px;
  height: 30px;
}

.volume-down {
  top: 100px;
  left: -5px;
  height: 30px;
}

.power {
  top: 80px;
  right: -5px;
  height: 45px;
  width: 3px;
  border-radius: 0 2px 2px 0;
}

.screen-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.95;
}

.floating-blob {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes float-phone {

  0%,
  100% {
    transform: translate(-50%, -50%) translateZ(120px) rotateY(-15deg) rotateX(5deg) scale(1.1);
  }

  50% {
    transform: translate(-50%, -55%) translateZ(140px) rotateY(-10deg) rotateX(8deg) scale(1.15);
  }
}

/* Responsividade Aprimorada */
@media (max-width: 1024px) {
  .laptop-device {
    width: 400px;
  }

  .laptop-lid {
    height: 260px;
  }

  .phone-device {
    left: 75%;
    width: 110px;
    height: 220px;
  }
}

@media (max-width: 768px) {
  .laptop-device {
    width: 300px;
    left: 45%;
  }

  .laptop-lid {
    height: 200px;
  }

  .phone-device {
    left: 80%;
    width: 85px;
    height: 170px;
  }
}

@media (max-width: 480px) {
  .laptop-device {
    width: 220px;
    left: 35%;
    top: 40%;
  }

  .laptop-lid {
    height: 140px;
  }

  .phone-device {
    left: 85%;
    top: 65%;
    width: 70px;
    height: 140px;
  }
}
</style>
