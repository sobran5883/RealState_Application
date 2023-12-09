import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{              //here we created a server and a proxy, we just say each time the adderss starts and includes /api at localhost 3000 at the beginning
    proxy:{             //here we create proxy so we can request to the correct address each time
      '/api':{
        target:'http://localhost:3000',  //this is not secure that's why we have to target it and say secure:false
        secure:false,
      },
    },
  },
  plugins: [react()],
})
