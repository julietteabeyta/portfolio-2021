export default function Header() {
  return (
    <div className="nav content-container">
      <a href="/">
        <div id="header-logo-container">
          <svg id="w1" width="324" height="285" viewBox="0 0 324 285" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M142.4 252.6C142.4 252.2 142.4 249.8 142.4 247.8C144 239.8 144.4 231.4 146.8 223.4C147.6 221.4 148 219 148.4 216.6C149.6 211 151.2 205.8 154 201C155.6 199 156.8 197 156.8 194.2C156.4 189 158 184.6 160.8 180.2C162.4 177.8 164 175.4 165.6 173C166.4 172.2 168 172.2 168.8 173C170.4 174.6 172 177 172.4 179.4C173.6 183.4 174 187.4 174.8 191.8C176 197.4 176.8 203.4 180.4 208.6C181.6 210.6 182.8 213.4 183.2 215.8C185.6 224.6 187.6 233 189.6 241.8C190.4 246.2 190.4 250.2 189.2 254.2C188 257.8 187.6 261.8 185.2 264.6C183.2 270.2 180.8 275 176 278.2C176 278.2 176 279.8 176.4 280.2C177.6 281 178.8 282.2 180 282.6C182 283 184.4 283 186.4 283.8C189.6 285 192.8 283.8 195.6 282.6C197.2 282.2 198.8 281.4 200.4 280.6C205.2 277.8 210.4 276.2 215.6 275C222.8 273.4 229.6 273 236.4 276.6C243.6 280.2 251.2 281.8 259.2 283C261.6 283.4 264 283 266.4 283C267.6 283 268.8 280.2 268 279C267.6 277.8 267.2 276.2 266.4 275C261.6 267.8 259.2 259.8 259.2 250.6C259.2 245.4 259.6 240.2 261.2 235C262 232.2 263.2 229.8 264 226.6C264.8 223.4 265.2 220.2 266 216.6C266.4 215.4 266.4 213.8 266.8 212.6C269.6 208.2 270.4 203.4 270 198.6C270 194.2 271.2 190.2 274 187C275.2 185.8 275.6 184.6 275.2 183C274.8 178.6 274.4 173.8 275.2 169.4C276 166.2 276.4 162.6 276.8 159.4C277.2 156.6 278 154.2 279.6 152.2C280.8 149.4 282.8 147.4 285.2 145.4C286.8 143.4 289.6 142.6 290.4 140.2C291.6 137 289.6 134.2 289.2 131.4C289.2 129.4 288 127.8 287.6 126.2C286.8 123.8 286.4 121.8 286.8 119.4C286.8 117.4 286.8 115.4 287.6 113.8C289.6 109 289.6 103.4 291.2 98.6C292.4 93 293.2 87.4 294.4 81.8C295.6 77.4 296 72.2 297.2 67.8C298.8 59.8 300.8 52.2 301.6 44.6C302 39.4 303.6 35 306.8 31C309.2 28.6 310.8 25.8 311.6 22.6C313.2 18.2 316 14.6 319.2 11.8C320.4 11 321.6 9.79999 322.8 8.99998C323.2 8.59998 323.6 7.4 323.2 6.99998C322.8 6.19999 322 5.4 321.6 4.59998C321.2 4.19999 320.8 4.19999 320.4 4.19999C312.8 2.99998 305.6 4.19999 298.8 7.79999C298 8.19999 297.6 8.59998 296.8 8.99998C294 11 290.8 11 287.6 9.79999C284.4 8.19999 281.2 6.99998 277.6 5.4C273.6 3.39998 269.2 1.8 264.8 0.599988C264.4 0.599988 264 0.199993 263.6 0.199993C260 -0.200002 256.8 0.599988 253.6 2.59999C253.2 2.59999 252.8 3.79999 252.8 4.19999C252.8 4.99998 253.2 5.79999 253.6 6.19999C260.4 14.6 264.4 24.2 266.4 34.6C266.8 37.4 266.8 39.8 266.4 42.6C266 45 265.6 47.8 265.2 50.2C264.4 54.6 262.8 59 262.8 63.4C260.8 68.6 260.4 73.8 259.6 79C259.2 83 258.4 87 256.8 91C255.2 94.6 254.4 97.8 255.2 101.8C255.6 102.6 255.6 104.2 255.2 105C252 111 251.2 117.8 249.6 124.2C248.8 127.4 248.4 130.2 247.2 133C245.2 137 243.6 141 242 145.4C241.2 148.6 241.6 152.2 240.8 155.4C238.8 163 238 171 234 177.8C233.2 178.6 233.6 180.2 233.6 181C234 183 233.6 185 232.4 186.6C232 187.4 230.4 187.8 229.6 187C228.8 186.6 228 185.8 227.2 185C225.2 180.6 223.2 176.2 221.6 171.4C220.4 168.6 219.2 165 218.4 161.8C217.6 158.6 216.8 155.4 216 152.2C214.8 147.8 214.4 143.4 211.6 139.8C211.2 139 210.8 138.2 210.8 137.4C209.6 131.8 206.8 126.2 204.8 120.6C204.4 119.8 204 118.6 204 117.4C204.8 113.4 204 109.4 202.4 105.4C201.2 102.6 200.4 99.8 200 96.6C197.2 83 193.2 69.8 190 56.2C189.2 53.8 188.8 51 189.2 48.6C190 44.6 190.4 40.2 191.6 36.6C193.2 32.2 194.4 27.8 198.4 25C198.4 25 198.8 24.6 199.2 24.2C200.8 19.4 204 15.4 206 10.2C206.4 8.99998 206.4 7.4 205.6 6.19999C204.8 4.99998 203.6 3.79999 202 4.19999C195.6 5.4 189.2 6.19999 183.2 8.19999C180.8 9.39999 178.8 10.2 177.6 13C176.8 15 175.2 16.6 173.2 17.4C167.2 19.8 161.2 20.2 155.6 15.8C151.2 12.6 146.4 10.6 141.6 8.19999C138.4 6.19999 134.8 6.19999 131.2 6.19999C129.2 6.59998 128 8.59998 128.4 10.2C130.8 15.4 132.4 21 134.8 25.8C136.4 29 137.2 32.2 138 35.4C139.2 39.8 139.6 44.2 141.2 48.6C142.4 51.8 142.8 55.4 142.4 58.6C141.6 62.2 142 66.2 142 69.8C141.6 73.4 141.2 77 141.2 81C141.2 85 139.6 89 139.2 93C138.8 97 138 100.6 136.8 104.2C134 112.6 131.2 121 129.6 129.8C128.8 133 127.6 136.2 126.4 139.4C126 141.8 124.8 143.8 123.2 145C122 146.2 121.6 147.8 122 149.4C122.8 151.8 122.4 154.6 121.6 157C120 164.2 118.4 171 116.8 177.8C116.4 179 115.6 179.8 115.2 181C114.4 181.8 112 182.2 111.6 181C110.8 180.2 110 179.4 109.6 178.2C104 164.2 98.4 150.6 94.4 135.8C90.8 121.4 86.4 107 82.4 92.6C81.6 90.2 81.6 87.4 81.2 85C80.8 83.8 80.8 82.6 80.4 81.8C78 78.6 78 74.6 76 71.4C73.2 66.6 73.2 61.4 73.2 56.2C73.2 53.8 74 51.4 73.6 49.4C73.2 41.8 74.8 34.6 77.2 27.4C79.2 21.4 81.6 16.2 84.8 11.4C86 8.99998 87.2 6.59998 88 4.19999C88.4 3.79999 87.2 1.8 86.4 1.8C85.6 1.8 84.4 1.8 83.2 1.8C80 1.39998 77.2 3.39998 74 3.79999C70.8 4.19999 68.4 5.4 66 6.99998C61.2 10.6 56 13.8 50 15.8C49.6 15.8 48.8 16.6 48.4 17C46.4 19.4 44 19.4 41.6 19C36.4 17.8 31.2 16.2 27.2 12.2C26.8 11.8 26.4 11.4 26.4 11.4C20.8 6.99998 14.8 5.4 8.4 5.4C6.8 5.4 5.6 5.79999 4 5.79999C3.2 5.79999 2.8 6.19999 2 6.19999C0.4 6.59998 -0.4 8.59998 0.4 9.79999C4 13.8 7.6 18.2 11.2 22.2C19.2 32.2 24.4 43.8 25.6 57C26.4 62.2 26 68.2 29.2 73C32 83.8 34.8 94.2 37.6 104.6C38.8 108.2 38.8 112.2 38 115.8C36.8 120.2 36.4 124.6 34 128.6C28.8 136.6 27.6 137.4 36.8 141.4C37.2 141.4 37.6 141.8 38 141.8C41.6 143.8 44.4 146.6 46.4 150.2C50 156.6 53.6 163 54.8 170.6C55.6 174.2 56.8 177.4 57.6 180.6C58 183.4 57.2 186.6 58.8 189.4C60 192.2 60.8 195 62 197.8C62.8 200.6 64.8 203 65.6 205.8C69.2 215.8 72.4 225.4 73.6 236.2C74 239 74 242.2 73.2 245C71.6 252.6 67.6 259 64.8 265.8C63.6 268.2 62 270.2 60 271.8C59.2 272.6 58.4 273.4 58 274.2C56.4 276.6 57.6 281 60 281.8C61.6 282.2 62.8 283 64.4 283C67.6 283 70.8 283.4 74 282.6C78 282.2 82 281 85.6 278.6C91.2 275 97.2 272.6 103.6 270.6C106.4 269.8 109.2 269.8 112 270.6C117.2 271.8 122.4 272.2 127.2 275.8C128.8 277 130.8 277.4 132.8 278.6C137.6 280.6 142.4 282.2 147.2 283C148.4 283 150 281.4 149.6 280.2C149.2 277.8 148.4 275.4 147.2 273.8C143.6 267.8 142.4 261.4 142.4 252.6ZM80.4 186.6C80 186.2 79.2 185.8 78.8 185.4C78.4 184.6 78.8 183.8 79.6 183.8L80.4 184.2C80.4 185 80.4 185.8 80.4 186.6C80.8 186.6 81.2 186.6 81.2 187C81.2 187.4 80.8 187.4 80.4 186.6ZM166 125.4L165.6 126.2C165.2 126.2 165.2 125.8 166 125.4C166.4 124.6 166 123.4 167.2 123C167.2 123.4 167.2 123.8 167.2 123.8C166.8 124.6 166.4 125 166 125.4ZM89.2 202.6C89.2 203 89.2 203.8 88.8 204.6C88.8 205 88.4 205 88 205C87.2 204.6 86.8 204.2 87.2 203.4C87.6 202.6 88.4 202.6 88.8 202.2C88.8 201.4 88.8 200.6 88.4 200.2C88.4 199.8 88.4 199.4 88.8 199C88.8 199 89.2 198.6 89.6 199C90.4 199 90.8 199.8 90.4 200.6C90 201.4 89.6 201.8 89.2 202.6ZM186 111L185.2 111.8C184.8 113 184 113.8 182.8 113.4C182.4 113.4 181.6 113 181.2 112.6C180.8 112.2 180.8 111 180.8 110.6C181.2 110.2 182 110.2 182.8 110.2C183.6 110.6 184.4 111.4 185.2 111.8L186 111ZM72 139C72.4 139.4 73.2 139.4 74 139.4C74.4 139.8 74.8 140.6 74.8 141.4C74.4 142.2 73.6 143.4 72.8 143C72.4 143 71.2 142.2 71.2 141.8C71.2 141 71.6 139.8 72 139C71.6 139 71.2 139 70.8 139C70.4 138.6 69.6 138.6 69.2 138.2C68.4 137.4 69.2 136.2 70.4 135.8C70.8 135.4 71.6 135.8 72.4 135.8C72.4 135.8 72.4 136.6 72.4 137C72.4 137.8 72 138.2 72 139ZM196 175.4C198 174.6 199.6 172.6 201.6 173C202 173 202.4 173.4 202.4 173.8C202.8 173.8 202.4 174.6 202.4 174.6C201.2 175.4 200 176.2 198.8 176.6C197.6 176.6 196.8 176.2 196 175L195.6 174.6L196 175.4ZM66.4 123.8C66.8 123.8 67.6 123.8 68.4 123.8C69.6 124.2 70.4 125.8 70.4 127.4C70.4 128.6 70 130.2 68.4 130.6C68 131 67.2 131 66.4 130.6C65.2 129.4 64.4 127.8 64.4 125.8C64 124.6 64.8 123.8 66.4 123.8ZM64.8 138.6C64.4 138.6 64.4 139.4 64 139.4C63.6 139.4 62.8 139.4 62.4 139.4C60.8 137.4 59.6 135 58.4 133C58.4 133 58.4 132.2 58.8 132.2C59.2 131.8 60 131.4 60.4 131.4C60.8 131 61.2 131.4 61.6 131.8C63.2 133.4 64 135.8 64.8 138.6ZM170.8 115.8C170 115.4 169.6 115.4 169.6 115C169.6 114.2 169.6 113.4 169.6 113C170.4 112.6 171.6 112.2 172.8 112.2C173.2 112.2 174 112.6 174.4 113C174 113.4 173.6 114.2 173.2 114.6C172.4 115 171.2 115.4 170.8 115.8ZM78 175C78 174.2 78.4 173.4 79.2 173.4C79.6 173.4 80.4 173.4 80.8 173.8C81.6 174.6 80.4 176.6 79.6 176.2C78.8 176.2 78.4 175.4 78 175ZM175.6 148.2H176C176.4 148.6 176.4 149 176 149.4C176 149.4 175.6 149.8 175.6 150.2C175.6 149.4 175.6 148.6 175.6 148.2ZM78.4 147C77.6 147 77.2 146.6 76.8 145.8L77.2 145C77.6 145 78 145 78 145C78.4 145.4 78.8 146.2 79.2 146.6L78.4 147ZM55.2 83.4C56 83.4 56.4 84.2 56.4 85C56.4 85 56 85.4 56 85.8C55.6 85.8 55.2 85.8 55.2 85.8C54.8 85 54.4 84.6 54.4 83.8C54.4 83.8 54.8 83.8 55.2 83.4ZM161.2 109.8C162 109.8 162 110.6 161.6 111.4C161.2 111.8 160.4 111.8 160 111.4C159.6 111.4 159.6 111 159.6 110.6C159.6 109.8 160.4 109.4 161.2 109.8ZM156 129.4L156.4 129.8C156.4 130.2 156.4 130.6 156.4 131C156 131 155.2 131.4 154.8 131.8C154.4 131.8 154 131.4 154 131C154 130.2 154.8 129.4 156 129.4ZM56 105.4H55.6L56 104.6V105.4ZM63.6 108.2V108.6L62.8 108.2H63.6ZM192 108.6C191.6 108.6 191.6 109 191.2 109C191.2 109 190.8 108.2 191.2 108.2C191.2 107.8 191.6 107.8 192 107.8C192 108.2 192 108.2 192 108.6ZM171.2 125.4L171.6 125V125.4H171.2ZM200.8 131.4L200 131L200.8 130.6V131.4ZM255.6 133.8V133L256.4 133.4L255.6 133.8ZM53.6 138.6L54 139L53.6 139.8V138.6ZM198 144.2L198.4 144.6L198 145V144.2ZM147.2 151V151.8L146.4 151.4L147.2 151ZM79.6 153.4C79.6 154.2 79.2 154.6 78.4 154.6C77.6 154.6 77.2 154.2 77.6 153.4C77.6 152.6 78.4 152.2 79.2 152.6C79.2 152.6 79.6 153 79.6 153.4ZM147.2 158.2L146.4 158.6V157.8L147.2 158.2ZM190.4 166.6C190.4 166.6 190.4 166.2 190.4 165.8H190.8C191.2 165.8 191.2 166.2 191.2 166.6C190.8 166.6 190.8 166.6 190.4 166.6ZM181.6 174.2H180.8V173.8L181.6 174.2ZM208.4 208.2C208.4 207.8 208.8 207.4 208.8 207.4C209.2 207.4 209.6 207.4 209.6 207.8C209.6 208.6 209.2 208.6 208.4 208.2ZM209.6 215.8C209.6 215.8 209.6 215.4 209.6 215C209.6 215 210 214.6 210 215C210.4 215 210.4 215.4 210.4 215.8C210 215.8 210 215.8 209.6 215.8ZM146.4 163L146 162.6L146.4 162.2C147.2 162.6 147.2 163 146.4 163ZM57.6 112.6H58.4L58 113.4L57.6 112.6Z" fill="#FBF8F8"/>
          </svg>
          <svg id="r" width="200" height="280" viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M194.8 108.8C194.8 97.6 193.6 86 190 74.4C188.4 68.4 186.4 62.4 184.8 56.4C182.4 53.6 180.4 50.8 178 47.6C177.6 46.8 176.8 46 176.4 44.8C175.2 42.8 173.2 40.8 171.2 39.6C165.6 35.6 160 31.6 155.6 26C154.4 24.8 153.2 23.6 151.6 22.4C145.2 17.2 137.6 14 130 10.4C128.8 9.99999 127.2 9.6 126 9.19998C119.2 8.39999 112.8 6.39999 106 6.79999C103.2 7.19998 100 6.79999 97.2 6.39999C90.4 5.59998 83.2 3.99998 76 6C71.2 4.39999 66.4 6.39999 61.2 6.39999C58.8 6.39999 56.4 6.79999 54 6.79999C50.4 6.79999 46.8 5.59998 43.6 5.19998C40 4.79999 36.4 6 32.8 6.39999C32.4 6.39999 32 6.39999 31.6 6.39999C22.8 4.79999 14 4.79999 5.6 1.19999C4.8 1.19999 4.4 1.19999 3.6 0.799993C2.4 0.799993 0.8 3.19999 1.2 3.99998C2 7.59998 3.6 10.8 5.6 14C10 22 14 30.4 16 39.6C17.2 44.4 18 49.6 17.6 54.8C17.2 58.8 17.2 62.8 17.2 66.8C17.2 73.6 17.6 80.4 17.2 86.8C17.2 91.2 17.2 95.6 18 100C18.8 104.4 18.8 108.8 18.4 113.2C17.6 118.4 17.6 123.6 17.6 128.8C17.6 130.8 17.2 132.4 16.8 134.4C16.4 136.4 14.8 137.6 12 137.6C9.6 137.2 8 138 7.2 140.4C7.2 141.2 7.2 142.8 7.6 143.6C10 150.4 12.8 157.2 15.2 164.4C16.4 167.2 16.8 170.4 16.8 174C17.2 180.8 17.2 187.2 17.6 194C17.6 200 18 206.4 18.8 212.8C19.6 216 19.2 219.2 18.8 222.8C18.4 227.2 17.6 232 17.2 236.8C17.2 238.4 16.8 239.6 16.4 241.2C15.2 244.4 13.6 248 12 251.2C9.6 257.2 6.8 263.2 2 268C1.2 268.4 1.2 269.2 0.8 269.6C0.4 270.8 0.4 272 0.4 273.2C1.49012e-07 274.4 1.6 276 2.8 276C8.4 274.8 14 273.6 19.6 272.4C23.2 272 26.4 270.8 29.6 268.8C33.6 266.4 38 264.8 42.8 265.2C43.6 265.6 44.8 265.2 46 265.2C50.8 265.6 56 266 60.4 268.4C63.6 270 66.8 271.2 70.4 272.8C75.2 274.8 80.4 275.6 86 276C86.8 276 87.6 275.2 88.4 274.4C89.2 273.6 88.8 272 88 271.2C86.8 269.6 85.2 268 83.6 266.4C80 262.8 77.2 258.4 75.2 253.6C71.2 244 69.6 234 68.4 223.6C68.4 222.4 68 221.2 68.4 220.4C70 216.4 69.2 212.4 68.8 208.4C68 204 68 199.6 68 195.2C68 193.2 68.4 191.6 68.8 189.6C71.2 182.8 72.4 181.2 79.2 181.2C80.8 181.2 82.4 181.2 83.6 181.6C84.8 181.6 86 182 86.8 182.4C90.4 185.6 94 188.4 94.8 193.6C94.8 194.8 95.2 196 96 196.4C99.2 200 100.8 204 102.4 208C103.2 210 104 212.4 105.2 214C109.6 222 112.8 230.8 116 239.2C119.6 250.4 122.4 262 122.4 274C122.4 274.8 122.4 275.6 122.8 276C122.8 277.2 124.4 278.8 125.6 279.2C128.4 279.6 131.2 279.2 134 277.6C137.6 276 140.4 273.2 143.2 270.4C146.8 266.4 151.2 264.4 156.4 263.6C158.4 263.6 160.4 263.6 162.8 264C169.6 266.4 176.4 268.4 183.2 270.4C184.4 270.8 185.6 271.2 187.2 270.8C188.8 270.4 190.8 270 192.4 269.6C194.8 269.6 196.4 268.4 198.4 267.2C199.6 266.4 199.6 265.2 198.8 264.4C196 262 193.6 259.6 190.4 257.6C186.8 255.2 184 252 181.2 248.4C177.2 242.8 172.8 237.6 168.8 232C167.2 230.4 166 228.4 164.8 226.8C159.6 218.4 155.2 209.6 151.2 200.4C148.4 193.2 146.8 185.6 145.6 178C145.2 177.2 146 175.6 146.8 175.2C148 173.6 150 172 151.6 171.2C161.6 165.2 170.8 158 178.8 150C180 148.8 181.6 147.2 183.2 146.4C185.6 144.8 186.8 142.4 187.6 139.2C188.8 134.4 190 129.2 194 125.6C195.2 124.8 195.2 123.6 194.8 122.8C194 118.4 194.4 114 194.8 108.8ZM48.8 116.8V117.2C49.2 118 49.6 118.4 49.6 118.8C49.6 119.2 49.2 119.2 48.8 119.6C48.8 121.2 48.4 122.4 46.8 122C45.2 122 43.6 121.6 43.2 120C42.8 118.4 42.8 116.8 42.8 115.2C42 114.8 41.2 114.4 40.8 114C39.6 113.2 39.6 111.6 40.4 111.2C40.8 111.2 41.6 110.8 42.4 110.8C43.2 110.8 44 112 43.6 113.2C43.2 114 42.8 114.4 42.4 115.2C44.8 116.8 46 119.6 49.2 119.6C49.2 118.8 49.2 118 49.2 117.2L48.8 116.8ZM44.4 199.6H44.8C45.2 198.4 45.2 197.6 45.6 196.4C45.6 196 46 195.6 46.8 196C47.2 196 47.2 196.4 47.2 196.8C47.2 196.8 47.2 197.2 47.2 197.6C46.4 198 45.6 198.8 44.8 199.2L44.4 199.6ZM40.4 102C42.4 102 43.6 103.2 43.6 105.2C43.6 105.6 43.2 106.4 42.4 106.8C42 107.2 41.2 106.8 41.2 106C40.8 104.4 40.8 103.2 40.8 101.6L40 101.2L40.4 102ZM38.4 144C40 144.8 41.6 145.2 42.8 143.2C43.6 142.4 44.4 142 45.2 141.2C46 140.8 47.6 141.6 47.6 142.4C48 145.2 48.4 148 49.2 150.8C49.2 150.8 49.6 151.2 49.6 151.6C50.4 153.6 50 155.2 48.4 156.4C46.8 157.2 45.6 156.4 44.8 155.2C44 154.8 43.6 154.8 42.8 154.8C41.6 154.4 40.8 154 40.8 152.8C41.2 149.6 39.6 147.6 38.8 144.8C38.8 144.8 38.4 144.4 38.4 144C37.6 143.2 36.8 142.8 36 142.4C35.6 141.6 35.6 140.8 36 140.4C36.4 140.4 36.8 140.4 36.8 140.4C37.2 140.8 37.6 140.8 37.6 141.2C38 142 38 143.2 38.4 144ZM69.6 84.8C69.6 76.8 70 68.8 69.6 60.4C69.6 56.8 71.2 53.2 72.8 50C73.2 49.2 74.4 48.4 75.2 48.4C82.8 47.2 90.8 47.2 98.4 48C102.4 48.4 106 50 110 50C112.4 50.4 114.8 51.6 116.8 52.8C122.8 55.6 127.6 60 130.4 66.4C131.2 68 132 69.6 132.8 71.2C137.2 76.4 138.4 83.2 140.4 89.2C141.6 92.8 141.2 96.4 140 100C138.4 104 137.6 108 136.8 112C136.4 116 134.8 119.6 131.2 122C129.2 123.2 127.6 124.8 126.8 126.8C125.2 129.6 122.8 131.2 120 132C118.4 132.4 116.8 133.2 114.8 133.2C110.8 133.2 106.4 134 102.4 136C99.2 137.2 96 138 92.4 138.4C88 138.4 83.6 139.2 79.6 139.6C77.2 140 75.2 139.2 73.2 138.4C71.2 137.2 69.6 135.6 69.6 133.2C69.2 129.2 68 124.8 68.4 120.4C70 110 69.6 99.6 69.6 89.2C69.6 87.6 69.6 86.4 69.6 84.8ZM46 175.6C47.6 175.6 49.2 176.4 50.4 178C50.4 178.4 50.4 179.2 50 179.6C50 180 48.8 180 48.4 179.6C47.2 179.2 46.4 178 45.2 177.2V176.4C45.2 176 45.6 176 46 175.6ZM163.2 124.4C162.8 124.8 162.4 125.2 161.6 125.2C160.4 124.8 159.2 123.6 159.6 122.8C159.6 122.8 160 122.4 160.4 122.4C161.6 122 162.4 122.4 162.8 123.2C163.2 123.6 163.2 124 163.2 124.4ZM134 41.6C134 42.4 133.2 42.8 132.8 42.4C132.4 42 132 41.2 132 40.8C132.4 40.4 132.8 40.4 133.6 40C133.6 40.8 134 41.2 134 41.6ZM42.4 129.6L42.8 129.2V130L42.4 129.6ZM160 130.8C159.6 131.2 159.2 131.6 159.2 131.6C158.4 131.2 158 130.8 158.4 130C158.4 129.6 158.8 129.2 159.2 129.2C160 129.6 160 130 160 130.8ZM152 140.4C152 140.8 152 140.8 152 141.2C152 141.2 151.2 141.6 151.2 141.2C150.4 140.8 150.4 140.4 151.2 140C151.6 140 152 140.4 152 140.4ZM56.4 162V161.2L56.8 162H56.4ZM39.2 181.2L39.6 181.6L39.2 182V181.2ZM153.2 70L152.4 69.6L152.8 69.2L153.2 70Z" fill="#FBF8F8"/>
          </svg>
          <img src="/hands.png" alt="Praying hands"></img>
          <svg id="w2" width="324" height="285" viewBox="0 0 324 285" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M142.4 252.6C142.4 252.2 142.4 249.8 142.4 247.8C144 239.8 144.4 231.4 146.8 223.4C147.6 221.4 148 219 148.4 216.6C149.6 211 151.2 205.8 154 201C155.6 199 156.8 197 156.8 194.2C156.4 189 158 184.6 160.8 180.2C162.4 177.8 164 175.4 165.6 173C166.4 172.2 168 172.2 168.8 173C170.4 174.6 172 177 172.4 179.4C173.6 183.4 174 187.4 174.8 191.8C176 197.4 176.8 203.4 180.4 208.6C181.6 210.6 182.8 213.4 183.2 215.8C185.6 224.6 187.6 233 189.6 241.8C190.4 246.2 190.4 250.2 189.2 254.2C188 257.8 187.6 261.8 185.2 264.6C183.2 270.2 180.8 275 176 278.2C176 278.2 176 279.8 176.4 280.2C177.6 281 178.8 282.2 180 282.6C182 283 184.4 283 186.4 283.8C189.6 285 192.8 283.8 195.6 282.6C197.2 282.2 198.8 281.4 200.4 280.6C205.2 277.8 210.4 276.2 215.6 275C222.8 273.4 229.6 273 236.4 276.6C243.6 280.2 251.2 281.8 259.2 283C261.6 283.4 264 283 266.4 283C267.6 283 268.8 280.2 268 279C267.6 277.8 267.2 276.2 266.4 275C261.6 267.8 259.2 259.8 259.2 250.6C259.2 245.4 259.6 240.2 261.2 235C262 232.2 263.2 229.8 264 226.6C264.8 223.4 265.2 220.2 266 216.6C266.4 215.4 266.4 213.8 266.8 212.6C269.6 208.2 270.4 203.4 270 198.6C270 194.2 271.2 190.2 274 187C275.2 185.8 275.6 184.6 275.2 183C274.8 178.6 274.4 173.8 275.2 169.4C276 166.2 276.4 162.6 276.8 159.4C277.2 156.6 278 154.2 279.6 152.2C280.8 149.4 282.8 147.4 285.2 145.4C286.8 143.4 289.6 142.6 290.4 140.2C291.6 137 289.6 134.2 289.2 131.4C289.2 129.4 288 127.8 287.6 126.2C286.8 123.8 286.4 121.8 286.8 119.4C286.8 117.4 286.8 115.4 287.6 113.8C289.6 109 289.6 103.4 291.2 98.6C292.4 93 293.2 87.4 294.4 81.8C295.6 77.4 296 72.2 297.2 67.8C298.8 59.8 300.8 52.2 301.6 44.6C302 39.4 303.6 35 306.8 31C309.2 28.6 310.8 25.8 311.6 22.6C313.2 18.2 316 14.6 319.2 11.8C320.4 11 321.6 9.79999 322.8 8.99998C323.2 8.59998 323.6 7.4 323.2 6.99998C322.8 6.19999 322 5.4 321.6 4.59998C321.2 4.19999 320.8 4.19999 320.4 4.19999C312.8 2.99998 305.6 4.19999 298.8 7.79999C298 8.19999 297.6 8.59998 296.8 8.99998C294 11 290.8 11 287.6 9.79999C284.4 8.19999 281.2 6.99998 277.6 5.4C273.6 3.39998 269.2 1.8 264.8 0.599988C264.4 0.599988 264 0.199993 263.6 0.199993C260 -0.200002 256.8 0.599988 253.6 2.59999C253.2 2.59999 252.8 3.79999 252.8 4.19999C252.8 4.99998 253.2 5.79999 253.6 6.19999C260.4 14.6 264.4 24.2 266.4 34.6C266.8 37.4 266.8 39.8 266.4 42.6C266 45 265.6 47.8 265.2 50.2C264.4 54.6 262.8 59 262.8 63.4C260.8 68.6 260.4 73.8 259.6 79C259.2 83 258.4 87 256.8 91C255.2 94.6 254.4 97.8 255.2 101.8C255.6 102.6 255.6 104.2 255.2 105C252 111 251.2 117.8 249.6 124.2C248.8 127.4 248.4 130.2 247.2 133C245.2 137 243.6 141 242 145.4C241.2 148.6 241.6 152.2 240.8 155.4C238.8 163 238 171 234 177.8C233.2 178.6 233.6 180.2 233.6 181C234 183 233.6 185 232.4 186.6C232 187.4 230.4 187.8 229.6 187C228.8 186.6 228 185.8 227.2 185C225.2 180.6 223.2 176.2 221.6 171.4C220.4 168.6 219.2 165 218.4 161.8C217.6 158.6 216.8 155.4 216 152.2C214.8 147.8 214.4 143.4 211.6 139.8C211.2 139 210.8 138.2 210.8 137.4C209.6 131.8 206.8 126.2 204.8 120.6C204.4 119.8 204 118.6 204 117.4C204.8 113.4 204 109.4 202.4 105.4C201.2 102.6 200.4 99.8 200 96.6C197.2 83 193.2 69.8 190 56.2C189.2 53.8 188.8 51 189.2 48.6C190 44.6 190.4 40.2 191.6 36.6C193.2 32.2 194.4 27.8 198.4 25C198.4 25 198.8 24.6 199.2 24.2C200.8 19.4 204 15.4 206 10.2C206.4 8.99998 206.4 7.4 205.6 6.19999C204.8 4.99998 203.6 3.79999 202 4.19999C195.6 5.4 189.2 6.19999 183.2 8.19999C180.8 9.39999 178.8 10.2 177.6 13C176.8 15 175.2 16.6 173.2 17.4C167.2 19.8 161.2 20.2 155.6 15.8C151.2 12.6 146.4 10.6 141.6 8.19999C138.4 6.19999 134.8 6.19999 131.2 6.19999C129.2 6.59998 128 8.59998 128.4 10.2C130.8 15.4 132.4 21 134.8 25.8C136.4 29 137.2 32.2 138 35.4C139.2 39.8 139.6 44.2 141.2 48.6C142.4 51.8 142.8 55.4 142.4 58.6C141.6 62.2 142 66.2 142 69.8C141.6 73.4 141.2 77 141.2 81C141.2 85 139.6 89 139.2 93C138.8 97 138 100.6 136.8 104.2C134 112.6 131.2 121 129.6 129.8C128.8 133 127.6 136.2 126.4 139.4C126 141.8 124.8 143.8 123.2 145C122 146.2 121.6 147.8 122 149.4C122.8 151.8 122.4 154.6 121.6 157C120 164.2 118.4 171 116.8 177.8C116.4 179 115.6 179.8 115.2 181C114.4 181.8 112 182.2 111.6 181C110.8 180.2 110 179.4 109.6 178.2C104 164.2 98.4 150.6 94.4 135.8C90.8 121.4 86.4 107 82.4 92.6C81.6 90.2 81.6 87.4 81.2 85C80.8 83.8 80.8 82.6 80.4 81.8C78 78.6 78 74.6 76 71.4C73.2 66.6 73.2 61.4 73.2 56.2C73.2 53.8 74 51.4 73.6 49.4C73.2 41.8 74.8 34.6 77.2 27.4C79.2 21.4 81.6 16.2 84.8 11.4C86 8.99998 87.2 6.59998 88 4.19999C88.4 3.79999 87.2 1.8 86.4 1.8C85.6 1.8 84.4 1.8 83.2 1.8C80 1.39998 77.2 3.39998 74 3.79999C70.8 4.19999 68.4 5.4 66 6.99998C61.2 10.6 56 13.8 50 15.8C49.6 15.8 48.8 16.6 48.4 17C46.4 19.4 44 19.4 41.6 19C36.4 17.8 31.2 16.2 27.2 12.2C26.8 11.8 26.4 11.4 26.4 11.4C20.8 6.99998 14.8 5.4 8.4 5.4C6.8 5.4 5.6 5.79999 4 5.79999C3.2 5.79999 2.8 6.19999 2 6.19999C0.4 6.59998 -0.4 8.59998 0.4 9.79999C4 13.8 7.6 18.2 11.2 22.2C19.2 32.2 24.4 43.8 25.6 57C26.4 62.2 26 68.2 29.2 73C32 83.8 34.8 94.2 37.6 104.6C38.8 108.2 38.8 112.2 38 115.8C36.8 120.2 36.4 124.6 34 128.6C28.8 136.6 27.6 137.4 36.8 141.4C37.2 141.4 37.6 141.8 38 141.8C41.6 143.8 44.4 146.6 46.4 150.2C50 156.6 53.6 163 54.8 170.6C55.6 174.2 56.8 177.4 57.6 180.6C58 183.4 57.2 186.6 58.8 189.4C60 192.2 60.8 195 62 197.8C62.8 200.6 64.8 203 65.6 205.8C69.2 215.8 72.4 225.4 73.6 236.2C74 239 74 242.2 73.2 245C71.6 252.6 67.6 259 64.8 265.8C63.6 268.2 62 270.2 60 271.8C59.2 272.6 58.4 273.4 58 274.2C56.4 276.6 57.6 281 60 281.8C61.6 282.2 62.8 283 64.4 283C67.6 283 70.8 283.4 74 282.6C78 282.2 82 281 85.6 278.6C91.2 275 97.2 272.6 103.6 270.6C106.4 269.8 109.2 269.8 112 270.6C117.2 271.8 122.4 272.2 127.2 275.8C128.8 277 130.8 277.4 132.8 278.6C137.6 280.6 142.4 282.2 147.2 283C148.4 283 150 281.4 149.6 280.2C149.2 277.8 148.4 275.4 147.2 273.8C143.6 267.8 142.4 261.4 142.4 252.6ZM80.4 186.6C80 186.2 79.2 185.8 78.8 185.4C78.4 184.6 78.8 183.8 79.6 183.8L80.4 184.2C80.4 185 80.4 185.8 80.4 186.6C80.8 186.6 81.2 186.6 81.2 187C81.2 187.4 80.8 187.4 80.4 186.6ZM166 125.4L165.6 126.2C165.2 126.2 165.2 125.8 166 125.4C166.4 124.6 166 123.4 167.2 123C167.2 123.4 167.2 123.8 167.2 123.8C166.8 124.6 166.4 125 166 125.4ZM89.2 202.6C89.2 203 89.2 203.8 88.8 204.6C88.8 205 88.4 205 88 205C87.2 204.6 86.8 204.2 87.2 203.4C87.6 202.6 88.4 202.6 88.8 202.2C88.8 201.4 88.8 200.6 88.4 200.2C88.4 199.8 88.4 199.4 88.8 199C88.8 199 89.2 198.6 89.6 199C90.4 199 90.8 199.8 90.4 200.6C90 201.4 89.6 201.8 89.2 202.6ZM186 111L185.2 111.8C184.8 113 184 113.8 182.8 113.4C182.4 113.4 181.6 113 181.2 112.6C180.8 112.2 180.8 111 180.8 110.6C181.2 110.2 182 110.2 182.8 110.2C183.6 110.6 184.4 111.4 185.2 111.8L186 111ZM72 139C72.4 139.4 73.2 139.4 74 139.4C74.4 139.8 74.8 140.6 74.8 141.4C74.4 142.2 73.6 143.4 72.8 143C72.4 143 71.2 142.2 71.2 141.8C71.2 141 71.6 139.8 72 139C71.6 139 71.2 139 70.8 139C70.4 138.6 69.6 138.6 69.2 138.2C68.4 137.4 69.2 136.2 70.4 135.8C70.8 135.4 71.6 135.8 72.4 135.8C72.4 135.8 72.4 136.6 72.4 137C72.4 137.8 72 138.2 72 139ZM196 175.4C198 174.6 199.6 172.6 201.6 173C202 173 202.4 173.4 202.4 173.8C202.8 173.8 202.4 174.6 202.4 174.6C201.2 175.4 200 176.2 198.8 176.6C197.6 176.6 196.8 176.2 196 175L195.6 174.6L196 175.4ZM66.4 123.8C66.8 123.8 67.6 123.8 68.4 123.8C69.6 124.2 70.4 125.8 70.4 127.4C70.4 128.6 70 130.2 68.4 130.6C68 131 67.2 131 66.4 130.6C65.2 129.4 64.4 127.8 64.4 125.8C64 124.6 64.8 123.8 66.4 123.8ZM64.8 138.6C64.4 138.6 64.4 139.4 64 139.4C63.6 139.4 62.8 139.4 62.4 139.4C60.8 137.4 59.6 135 58.4 133C58.4 133 58.4 132.2 58.8 132.2C59.2 131.8 60 131.4 60.4 131.4C60.8 131 61.2 131.4 61.6 131.8C63.2 133.4 64 135.8 64.8 138.6ZM170.8 115.8C170 115.4 169.6 115.4 169.6 115C169.6 114.2 169.6 113.4 169.6 113C170.4 112.6 171.6 112.2 172.8 112.2C173.2 112.2 174 112.6 174.4 113C174 113.4 173.6 114.2 173.2 114.6C172.4 115 171.2 115.4 170.8 115.8ZM78 175C78 174.2 78.4 173.4 79.2 173.4C79.6 173.4 80.4 173.4 80.8 173.8C81.6 174.6 80.4 176.6 79.6 176.2C78.8 176.2 78.4 175.4 78 175ZM175.6 148.2H176C176.4 148.6 176.4 149 176 149.4C176 149.4 175.6 149.8 175.6 150.2C175.6 149.4 175.6 148.6 175.6 148.2ZM78.4 147C77.6 147 77.2 146.6 76.8 145.8L77.2 145C77.6 145 78 145 78 145C78.4 145.4 78.8 146.2 79.2 146.6L78.4 147ZM55.2 83.4C56 83.4 56.4 84.2 56.4 85C56.4 85 56 85.4 56 85.8C55.6 85.8 55.2 85.8 55.2 85.8C54.8 85 54.4 84.6 54.4 83.8C54.4 83.8 54.8 83.8 55.2 83.4ZM161.2 109.8C162 109.8 162 110.6 161.6 111.4C161.2 111.8 160.4 111.8 160 111.4C159.6 111.4 159.6 111 159.6 110.6C159.6 109.8 160.4 109.4 161.2 109.8ZM156 129.4L156.4 129.8C156.4 130.2 156.4 130.6 156.4 131C156 131 155.2 131.4 154.8 131.8C154.4 131.8 154 131.4 154 131C154 130.2 154.8 129.4 156 129.4ZM56 105.4H55.6L56 104.6V105.4ZM63.6 108.2V108.6L62.8 108.2H63.6ZM192 108.6C191.6 108.6 191.6 109 191.2 109C191.2 109 190.8 108.2 191.2 108.2C191.2 107.8 191.6 107.8 192 107.8C192 108.2 192 108.2 192 108.6ZM171.2 125.4L171.6 125V125.4H171.2ZM200.8 131.4L200 131L200.8 130.6V131.4ZM255.6 133.8V133L256.4 133.4L255.6 133.8ZM53.6 138.6L54 139L53.6 139.8V138.6ZM198 144.2L198.4 144.6L198 145V144.2ZM147.2 151V151.8L146.4 151.4L147.2 151ZM79.6 153.4C79.6 154.2 79.2 154.6 78.4 154.6C77.6 154.6 77.2 154.2 77.6 153.4C77.6 152.6 78.4 152.2 79.2 152.6C79.2 152.6 79.6 153 79.6 153.4ZM147.2 158.2L146.4 158.6V157.8L147.2 158.2ZM190.4 166.6C190.4 166.6 190.4 166.2 190.4 165.8H190.8C191.2 165.8 191.2 166.2 191.2 166.6C190.8 166.6 190.8 166.6 190.4 166.6ZM181.6 174.2H180.8V173.8L181.6 174.2ZM208.4 208.2C208.4 207.8 208.8 207.4 208.8 207.4C209.2 207.4 209.6 207.4 209.6 207.8C209.6 208.6 209.2 208.6 208.4 208.2ZM209.6 215.8C209.6 215.8 209.6 215.4 209.6 215C209.6 215 210 214.6 210 215C210.4 215 210.4 215.4 210.4 215.8C210 215.8 210 215.8 209.6 215.8ZM146.4 163L146 162.6L146.4 162.2C147.2 162.6 147.2 163 146.4 163ZM57.6 112.6H58.4L58 113.4L57.6 112.6Z" fill="#FBF8F8"/>
          </svg>    
          <svg id="g" width="228" height="282" viewBox="0 0 228 282" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M114.4 1.39998C106.8 1.39998 98.8 3.4 91.2 6.19999C86 7.79999 80.4 10.6 75.2 14.6C72 16.6 68.4 19 64.4 19.4C62.4 19.8 60.4 20.6 59.2 22.6C57.6 25.4 55.6 27 53.2 28.6C51.2 30.2 49.2 31 47.6 32.6C46.4 33.4 45.2 34.2 44.4 35.4C42.4 38.2 40.8 40.6 38.8 43.4C35.6 48.6 32.8 53.8 31.2 59.4C29.2 65.4 25.6 70.6 23.6 76.6C22.4 79 20.8 81 19.2 83C18.4 83.4 18.4 84.2 18.4 85C18.4 90.6 15.6 95.8 13.2 100.6C12 103.8 10.8 106.6 11.6 110.2C12 114.2 12 118.2 9.6 121C5.6 126.2 4 132.6 0.8 137.8C1.49012e-07 139 1.49012e-07 140.6 0.8 141.8C1.2 143 2 143.8 2.4 145C7.6 156.6 12.4 167 10.4 180.2C10.4 180.6 10.4 181 10.4 181.4C10.4 185.8 10.4 190.2 12.4 194.6C13.6 196.6 14 199.4 14.4 202.2C15.2 207.8 17.6 213.4 18.8 219.4C19.2 220.6 19.6 221.4 20 222.6C24.8 231 29.6 239.8 37.2 246.6C40 249 42.4 251.8 44.8 254.6C48.4 258.6 52.4 262.2 57.6 264.6C59.6 265.8 61.6 267.4 64 268.2C69.6 270.6 75.2 272.6 80.8 275C83.6 276.2 86 277 89.2 277.4C96 277.4 102.8 278.2 109.2 280.2C112 281 114.4 281.8 117.6 280.6C118.8 280.2 120.4 279.8 121.6 279.8C131.6 278.2 140.8 273.8 150 270.2C154 268.2 157.2 265.4 160.8 262.6C160.8 262.6 161.2 262.2 161.6 262.2C162.4 262.2 163.2 262.2 163.6 262.6C165.2 263 166.8 265.4 166.4 267C166 267.8 165.6 269 165.6 270.2C165.2 272.2 165.2 274.6 164.8 276.6C164.8 278.2 166.4 279.8 167.6 279.4C170 279.4 172.8 279 175.2 278.2C177.6 277.8 179.6 276.6 182 275.4C189.6 271.8 197.2 271.4 204.8 274.6C206 275.4 207.2 276.2 208.8 276.6C211.6 277.4 214 277.8 216.8 278.6C220 279.8 223.2 277.8 226 277C227.6 276.6 228 274.2 227.2 273.4C224.8 271 222.4 268.6 220.4 265.8C215.6 259.4 211.2 252.6 210.8 243.8C208.4 240.2 208.4 236.2 207.6 232.2C206.8 227.4 206.4 222.6 208 217.8C208.4 216.2 208.8 214.6 208 213.4C207.2 211 207.2 208.2 207.2 205.4C207.2 201.8 206.8 198.2 207.2 194.2C207.6 190.2 209.2 186.6 207.6 182.2C207.6 181.8 208 181 208 180.2C209.2 175 210.8 169.8 214.8 166.2C216 165 216.8 163.4 217.2 161.4C217.2 160.2 218 158.6 218.4 157.4C220 154.6 221.6 152.2 223.2 149.8C223.6 148.6 222.8 146.2 221.6 146.2C219.6 146.2 218 145.8 216 145.8C208.8 145.8 202 147.4 196.8 153.4C194 155.8 190.8 157.4 187.6 159C184 161 180.4 161.4 176.4 159C172.8 157 169.2 156.2 166 153.8C162 151 157.2 150.6 152.8 149C152 148.6 150.8 149 149.6 149C148 149.8 146.4 150.2 144.8 151C144.4 151.4 144 152.2 143.6 153C143.2 154.6 143.6 156.6 144.8 158.2C145.6 159 146.4 159.8 147.2 160.2C155.2 167.8 159.6 176.2 162 187C163.2 192.6 163.6 197.8 161.6 203.4C161.2 204.6 161.2 206.2 161.2 207.8C160.8 209.4 161.2 211 160.8 212.2C160 217.4 158 221.4 153.6 224.2C152.4 225 151.2 225.4 150 226.6C146.8 229.8 142.8 231 138.4 231.4C136 231.8 133.6 232.2 131.2 231.4C129.6 231 128 230.6 126.8 231C123.2 231.4 119.6 230.6 116.4 229.4C109.6 227.8 103.6 225 98 221C94.4 218.2 90.4 216.2 87.2 213.4C83.6 210.6 81.2 207 78 204.2C72 198.6 70 191 68.8 183.4C70.4 179.8 68.4 176.6 67.6 173.4C66.8 171.4 66.4 169 66 167C65.2 162.6 64.8 158.2 65.6 153.8C67.2 151 66.8 148.2 66 145C65.2 140.6 65.2 135.4 65.6 130.6C66 128.6 66.4 127 67.6 125.4C68.4 124.2 68.8 122.6 68.4 121.4C67.6 117 68 113 69.6 109C71.6 102.2 74.8 95 78.4 88.6C79.6 85.8 81.6 83 83.2 80.2C84.8 76.6 87.2 73 91.6 71.8C92.8 71.8 93.2 70.6 93.6 69.8C96.4 65 100.4 61.8 105.2 59.8C109.6 58.2 114.4 55.8 118.8 53.8C123.2 51.8 127.6 51 132.4 51C136.4 50.6 140 52.2 144 52.2C150 52.6 155.6 54.6 161.2 58.2C166.8 61.4 172.8 65.4 178.4 69.4C184.8 73.8 190.4 79.4 195.6 85.8C200 91 204.8 96.2 208.8 101.8C209.2 102.6 210 102.6 210.8 102.6C211.2 102.6 212 101.8 212 101.4C212.4 96.2 212.8 91 213.2 85.8C213.6 81.4 212.8 77.8 210.8 73.8C208.4 70.2 207.6 65.8 204.8 61.8C203.6 60.2 203.2 57.8 202.4 55.8C200.4 52.2 199.6 48.2 202 44.2C202 40.2 203.6 37 206 34.2C207.6 31.8 209.2 29.8 210.4 27.8C214 21.4 216 14.6 214.8 7.39999C214.4 6.19999 214 5.4 213.6 4.19999C213.2 3.4 211.6 2.59998 210.8 2.99998C208 5.4 205.2 7.39999 202 9.79999C197.2 13.4 192 14.6 186 12.6C184.8 12.2 183.2 11.4 182 11.8C179.6 12.6 177.6 11.8 175.6 11C171.6 9.79999 167.6 8.19998 163.6 6.99998C158 5.4 152.8 3.4 146.8 3.4C143.2 2.19999 139.6 2.19999 136.4 1.79999C133.6 1.79999 130.4 1.79999 127.6 0.999981C125.2 0.199991 122.8 0.199991 120.4 0.999981C118.8 1.39998 116.8 1.39998 114.4 1.39998ZM33.6 105.4L34 104.6C34.4 104.2 34.4 103.8 34.8 103.4C36 104.6 34.8 104.6 34 104.6L33.6 105.4ZM39.2 134.2C39.2 135 39.2 135.8 38.8 136.2C38.4 136.6 37.6 136.6 36.8 136.6C36 136.2 35.6 134.6 36.4 133.8C36.8 133.4 37.6 133 38 133C38.4 133 38.8 133.8 39.2 134.2ZM50.4 86.2C50.4 86.6 50 87.8 49.6 87.8C49.2 88.6 48.4 88.2 48 87.4C47.6 86.6 48 85.8 48.8 85.4C49.6 85 50 85.4 50.4 86.2ZM41.2 129C40.8 129 40.4 128.6 40.4 128.6C40.4 127.8 40.8 127.4 41.6 127.8C42 127.8 42.4 128.2 42.4 128.2C42.4 129 42 129.4 41.2 129ZM32 137.8C31.6 137.4 31.2 137 30.8 136.6V135.8C31.6 135.8 32 136.2 32.4 136.2C32.8 136.6 32.8 137 32.8 137.4L32 137.8ZM28 159C28 159.4 27.6 159.8 27.6 159.8C27.2 160.2 26.8 160.2 26.8 159.8C26 159.4 26 158.6 26.4 158.2C26.8 158.2 27.2 158.2 27.2 158.2C27.6 158.2 27.6 158.6 28 159ZM111.6 29.4C111.2 29.8 110.4 30.2 110 29.8C109.6 29.4 109.2 28.6 109.2 27.8C109.6 27 110 27 110.8 27.4C111.2 27.8 111.2 28.6 111.6 29.4ZM42.4 117.4V117L42.8 117.4H42.4ZM122.8 34.2C122.4 34.2 122 34.6 122 34.2C121.6 34.2 121.6 34.2 121.2 33.8C121.6 33.8 121.6 33.4 122 33.4C122.4 33.4 122.4 33.8 122.8 34.2ZM49.2 63.4L48.4 63H49.2V63.4ZM61.6 67.4L62 67.8H61.6V67.4ZM52.4 73L52 73.8L51.6 73H52.4Z" fill="#FBF8F8"/>
          </svg>
        </div>
      </a>
      <div class="menu-wrap">
        <input type="checkbox" class="toggler"/>
        <div class="hamburger"><div></div></div>
        <div class="menu">
          <div>
            <div>
              <ul>
                <li><a href="/" className="fade-in">Shop</a></li>
                <li><a href="https://teespring.com/stores/my-store-10281756" target="_blank" className="fade-in">Merch</a></li>
                <li><a href="/about" className="fade-in">About</a></li>
                <li><a href="/archive" className="fade-in">Archive</a></li>
                <li><a href="/contact" className="fade-in">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}