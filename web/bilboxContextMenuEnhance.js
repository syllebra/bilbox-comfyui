import { app } from "../../scripts/app.js";

const photo_data = {
    "style": [
        {
            "name": "abstract",
            "description": "Abstract photography captures imaginative non- representational subjects creatively using visual elements like color and texture. For strong abstract images in Stable Diffusion weight the tag at (abstract:1.4).",
            "images": [
                "49.jpg",
                "50.jpg",
                "51.jpg"
            ]
        },
        {
            "name": "analogue",
            "description": "Analogue photography uses film and traditional developing processes to achieve a classic vintage look with grain, fading discoloration, light leaks, and textured imperfections absent in slick digital images. Useful for a generic vintage look.",
            "images": [
                "54.jpg",
                "55.jpg",
                "56.jpg"
            ]
        },
        {
            "name": "beauty",
            "description": "Beauty photography involves capturing elegant, stylized portraits of models to highlight and celebrate cosmetics glamor, and aesthetically pleasing subjects in a romanticized way. Combine with studio themed lighting prompts.",
            "images": [
                "59.jpg",
                "60.jpg",
                "61.jpg"
            ]
        },
        {
            "name": "candid",
            "description": "Candid photography involves taking spontaneous, unposed shots of people behaving naturally in public settings without their knowledge to capture authentic moments. Add actions to your prompt and a public setting to make this work well.",
            "images": [
                "64.jpg",
                "65.jpg",
                "66.jpg"
            ]
        },
        {
            "name": "documentary photography",
            "description": "Documentary photography captures real world subjects environments, events, and people in their authentic contexts to provide visual insight into culturally significant topics. This can create very realistic skin & is effective in black and white.",
            "images": [
                "69.jpg",
                "70.jpg",
                "71.jpg"
            ]
        },
        {
            "name": "glamour photography",
            "description": "Glamour photography involves stylized, idealized portraits of models showcasing cosmetics, seductive poses, and sensual allure to convey an aspirational image of beauty. You may want to use NSFW in your negative prompts or this will create nudes.",
            "images": [
                "74.jpg",
                "75.jpg",
                "76.jpg"
            ]
        },
        {
            "name": "high fashion photography",
            "description": "High fashion photography promotes cutting-edge designer clothing and accessories using inventive, avant garde artistic approaches, striking poses, and models to showcase an aspirational elegance. Also use catwalk as a setting tag.",
            "images": [
                "79.jpg",
                "80.jpg",
                "81.jpg"
            ]
        },
        {
            "name": "instant photo",
            "description": "Instant photos have a retro, vintage Polaroid look with faded colors, uneven exposures, imperfections, and blotchy shadows created immediately when taken without development. Weight the tag at (instant photo:1.4). Add soft focus & a film type tag.",
            "images": [
                "84.jpg",
                "85.jpg",
                "86.jpg"
            ]
        },
        {
            "name": "large format",
            "description": "Large format photography uses cameras with film sizes of 4x5 inches or larger to achieve incredibly high resolution, sharpness fine grain, and detailed photos suitable for large prints. this tag gives sharp images but with an organic film grain.",
            "images": [
                "89.jpg",
                "90.jpg",
                "91.jpg"
            ]
        },
        {
            "name": "lifestyle photography",
            "description": "Lifestyle photography involves capturing candid, documentary- style shots of people, in everyday home or domestic situations to convey personality and meaningful moments. Use with action and setting tags to create stock photo style images.",
            "images": [
                "94.jpg",
                "95.jpg",
                "96.jpg"
            ]
        },
        {
            "name": "modernist",
            "description": "Modernist photography is characterized by simple, geometric compositions, minimalism, & emphasis on shape. In Stable Diffusion, however, it creates a 1960\u2019s aesthetic more in line with Modernist architecture.",
            "images": [
                "99.jpg",
                "100.jpg",
                "101.jpg"
            ]
        },
        {
            "name": "paparazzi",
            "description": "Paparazzi photography involves candid shots of celebrities going about daily life without permission, often dangerously or unethically, to capture scandalous, sensationalist, or intimate images.",
            "images": [
                "104.jpg",
                "105.jpg",
                "106.jpg"
            ]
        },
        {
            "name": "pictorialist style",
            "description": "Pictorialist photography from the 1800\u2019s mimics impressionist paintings using soft focus, diffused lighting, to make dreamlike romanticized images. Add soft focus, dreamy haze & black and white tags to enhance. Use a weight of (pictorialist:1.5).",
            "images": [
                "109.jpg",
                "110.jpg",
                "111.jpg"
            ]
        },
        {
            "name": "polaroid",
            "description": "Polaroid photography uses instant film that develops prints immediately, producing retro-style images with faded color uneven exposures, shadows, and imperfections absent in modern digital photos. Unlike instant this tag has softer images.",
            "images": [
                "114.jpg",
                "115.jpg",
                "116.jpg"
            ]
        },
        {
            "name": "pinhole photography",
            "description": "Pinhole photography uses a camera without a lens that has a tiny pinhole aperture, creating soft focus dreamlike images with nearly infinite depth of field but requiring long exposures.",
            "images": [
                "119.jpg",
                "120.jpg",
                "121.jpg"
            ]
        },
        {
            "name": "street fashion photography",
            "description": "Street fashion photography captures candid shots of stylish real people in urban settings wearing creative street style outfits and designs outside of studios or runways.",
            "images": [
                "124.jpg",
                "125.jpg",
                "126.jpg"
            ]
        },
        {
            "name": "surrealist",
            "description": "Surrealist photography creates fantastical, dreamlike images using imaginative composites, collages, darkroom manipulations, and unusual juxtapositions to convey subconscious realities. Needs a weight of (surrealist photo:1.5).",
            "images": [
                "129.jpg",
                "130.jpg",
                "131.jpg"
            ]
        },
        {
            "name": "tintype",
            "description": "Tintype photography involves capturing direct positive images onto lacquered iron plates, producing antique looking photos with high contrast, dark muted tones, and ghostly faded faces. High weights this will always make subjects look old fashioned.",
            "images": [
                "134.jpg",
                "135.jpg",
                "136.jpg"
            ]
        }
    ],
    "framing": [
        {
            "name": "close up on face",
            "description": "Specifying \u201cclose up on face\u201d in a portrait prompt frames tight on facial features to reveal emotion, identity, and fine details. Use it to highlight expressions and direct focus exclusively on the subject.",
            "images": [
                "162.jpg",
                "163.jpg",
                "164.jpg"
            ]
        },
        {
            "name": "full body",
            "description": "Specifying \u201cfull body\u201d frames the entire subject to showcase action, attire, and context. Use it for dynamic poses, to emphasize a key outfit or to establish a scene.",
            "images": [
                "167.jpg",
                "168.jpg",
                "169.jpg"
            ]
        },
        {
            "name": "head shot",
            "description": "Head shots tightly frame the face to spotlight identity, facial features, and expressive emotions. Use \u201chead shot\u201d to focus attention on nuanced details of the face and head. This framing includes more of the hair and shoulders.",
            "images": [
                "172.jpg",
                "173.jpg",
                "174.jpg"
            ]
        },
        {
            "name": "upper body",
            "description": "Upper body framing shows the subject from chest or waist up focusing on pose, expression, clothing, and hand gestures while still providing some environmental context.",
            "images": [
                "177.jpg",
                "178.jpg",
                "179.jpg"
            ]
        }
    ],
    "lighting": [
        {
            "name": "bounced lighting",
            "description": "Bounced lighting refers to soft, diffuse illumination created by reflecting light off surrounding surfaces like walls and ceilings rather than directly lighting the subject from the source. This can be prompted by specifying \u201csoft bounced lighting\u201d.",
            "images": [
                "195.jpg",
                "196.jpg",
                "197.jpg"
            ]
        },
        {
            "name": "candlelight",
            "description": "Candlelight produces a warm, intimate, flickering glow with subtle dancing shadows and highlights that can be prompted by specifying a scene lit solely by candles. This can be combined with another lighting style called chiaroscuro.",
            "images": [
                "200.jpg",
                "201.jpg",
                "202.jpg"
            ]
        },
        {
            "name": "chiaroscuro",
            "description": "Chiaroscuro lighting refers to high contrast illumination with strong shadows juxtaposed against bright highlights, which creates a dramatic, textured look. In Stable Diffusion this can create a photorealistic Renaissance painting style.",
            "images": [
                "205.jpg",
                "206.jpg",
                "207.jpg"
            ]
        },
        {
            "name": "cinematic lighting",
            "description": "Cinematic lighting uses dramatic high-contrast keys, backlights and rims to create moody Hollywood style portrait lighting effects that can be prompted in Stable Diffusion by specifying \u201ccinematic lighting\u201d with strong side key lights or rim lighting.",
            "images": [
                "210.jpg",
                "211.jpg",
                "212.jpg"
            ]
        },
        {
            "name": "soft diffused lighting",
            "description": "Diffused lighting is soft, low contrast illumination from a large diffusing light source that creates gentle shadows and can be prompted in Stable Diffusion by specifying a scene uses \u201csoft diffused lighting\u201d to create a smooth, even lighting effect.",
            "images": [
                "215.jpg",
                "216.jpg",
                "217.jpg"
            ]
        },
        {
            "name": "edge lighting",
            "description": "Edge lighting is side lighting placed behind a subject to produce a bright outlined \u201crim\u201d effect around their silhouette which can be prompted in Stable Diffusion by specifying \u201cdramatic edge lighting\u201d to make the subject vividly stand out.",
            "images": [
                "220.jpg",
                "221.jpg",
                "222.jpg"
            ]
        },
        {
            "name": "fill lighting",
            "description": "Fill lighting provides secondary illumination from the opposite side of the key light to soften shadows and balance out contrast which can be prompted in Stable Diffusion by specifying \u201csoft fill lighting\u201d to gently brighten shaded areas of a subject.",
            "images": [
                "225.jpg",
                "226.jpg",
                "227.jpg"
            ]
        },
        {
            "name": "flash photography",
            "description": "This utilizes a burst of bright, instant light that can create a sharp yet stylistic look, which can be prompted in Stable Diffusion with \u201cdirect flash photography\u201d or \u201charsh flash lighting\u201d. Too high a weight will add the flash symbol to everything! So be warned.",
            "images": [
                "230.jpg",
                "231.jpg",
                "232.jpg"
            ]
        },
        {
            "name": "god rays",
            "description": "God rays lighting creates dramatic beams of light streaming through particulate in the air which can be prompted by specifying \u201cradiant god rays\u201d or \u201clight beams streaming through haze\u201d to generate an atmospheric, mystical lighting effect.",
            "images": [
                "235.jpg",
                "236.jpg",
                "237.jpg"
            ]
        },
        {
            "name": "golden hour",
            "description": "Golden hour lighting refers to the warm, reddish hue and softened shadows created by the low angle of the sun at sunrise or sunset, which can be prompted by specifying \u201cwarm golden hour lighting\u201d to generate a romantic, magical ambience.",
            "images": [
                "240.jpg",
                "241.jpg",
                "242.jpg"
            ]
        },
        {
            "name": "hard light",
            "description": "Hard lighting refers to harsh, undiffused illumination that creates strong shadows and high contrast, which can be prompted by specifying a scene uses (hard lighting:1.4) to portray bold shapes and textures and a dramatic mood.",
            "images": [
                "245.jpg",
                "246.jpg",
                "247.jpg"
            ]
        },
        {
            "name": "high key lighting",
            "description": "High key studio lighting employs bright, even illumination against a white backdrop to create a clean, modern look with some contrast but minimal shadows in fashion and editorial photography. Prompted by specifying \u201chigh key brightly lit\u201d",
            "images": [
                "250.jpg",
                "251.jpg",
                "252.jpg"
            ]
        },
        {
            "name": "low key lighting",
            "description": "Low key lighting uses dramatic, moody illumination with shadows and dark, muted tones, typically prompted by specifying a \u201clow key lighting\u201d scene with minimal fill lighting to create higher contrast intrigue and a mysterious mood.",
            "images": [
                "255.jpg",
                "256.jpg",
                "257.jpg"
            ]
        },
        {
            "name": "natural lighting",
            "description": "Natural lighting utilizes the sun or other ambient light sources to gently illuminate a scene and can be prompted by specifying \u201csoft natural lighting\u201d to create a realistic, organic mood and avoid the artificial look of studio lighting in one sentence.",
            "images": [
                "260.jpg",
                "261.jpg",
                "262.jpg"
            ]
        },
        {
            "name": "neon lighting",
            "description": "Neon lighting employs the vibrant, saturated colors of neon tube lights which can create a lively, futuristic, or stylized look typically prompted by specifying a scene uses \u201cbright neon lighting\u201d to generate a colorful, artificial lighting effect.",
            "images": [
                "265.jpg",
                "266.jpg",
                "267.jpg"
            ]
        },
        {
            "name": "overcast lighting",
            "description": "Overcast lighting refers to the soft, even, low contrast illumination on cloudy days, which can be prompted by specifying \u201covercast flat lighting\u201d to simulate the muted shadows and tone of an overcast sky.",
            "images": [
                "270.jpg",
                "271.jpg",
                "272.jpg"
            ]
        },
        {
            "name": "rim lighting",
            "description": "Rim lighting is a strong back light placed behind a subject to create an outlined \u201crim\u201d or glow effect around their silhouette typically prompted by specifying \u201cdramatic rim lighting\u201d to make the subject stand out vividly from the background",
            "images": [
                "275.jpg",
                "276.jpg",
                "277.jpg"
            ]
        },
        {
            "name": "shadow play",
            "description": "Shadow play lighting creates dramatic results by strategically placing shadows and shafts of light, typically prompted by specifying \u201ccreative shadow play\u201d to generate high contrast and visual intrigue in a scene.",
            "images": [
                "280.jpg",
                "281.jpg",
                "282.jpg"
            ]
        },
        {
            "name": "silhouette lighting",
            "description": "Creates a silhouette effect by placing the subject or object in front of a bright backlight, usually prompted by specifying \u201csilhouetted against the bright sky/window/light\u201d to generate a bold darkened subject profiled against the background.",
            "images": [
                "285.jpg",
                "286.jpg",
                "287.jpg"
            ]
        },
        {
            "name": "soft lighting",
            "description": "Soft lighting minimizes shadows by using a large, diffused light source and can be prompted in Stable Diffusion by specifying \u201csoft lighting\u201d to create a gentle, smooth illumination that reduces texture and contrast",
            "images": [
                "290.jpg",
                "291.jpg",
                "292.jpg"
            ]
        }
    ],
    "camera angle": [
        {
            "name": "dutch angle",
            "description": "A Dutch angle refers to tilting the camera diagonally to create a skewed perspective, typically prompted in Stable Diffusion by specifying \u201cshot from a Dutch angle\u201d to make the composition appear more dynamic or convey unease. Use with high weight.",
            "images": [
                "299.jpg",
                "300.jpg",
                "301.jpg"
            ]
        },
        {
            "name": "from above/high angle",
            "description": "Specifying a \u201chigh angle\u201d or shooting \u201cfrom above\u201d refers to positioning the camera above the subject pointing down, which can frame the subject from an elevated viewpoint to emphasize smallness, vulnerability or isolation within the scene.",
            "images": [
                "304.jpg",
                "305.jpg",
                "306.jpg"
            ]
        },
        {
            "name": "from below/low angle",
            "description": "Specifying a \u201clow angle\u201d or shooting \u201cfrom below\u201d refers to positioning the camera below the subject pointing up, which can prompt SD to frame the subject from a low viewpoint to exaggerate power, height and dominance within the scene.",
            "images": [
                "309.jpg",
                "310.jpg",
                "311.jpg"
            ]
        },
        {
            "name": "eye level",
            "description": "Specifying an \u201ceye level\u201d camera angle refers to positioning the camera at the same height as the subject\u2019s eyes, typically prompted in Stable Diffusion to create a direct perspective that conveys neutrality and intimacy with the subject.",
            "images": [
                "314.jpg",
                "315.jpg",
                "316.jpg"
            ]
        }
    ],
    "camera properties": [
        {
            "name": "Aaton LTR",
            "description": "The Aaton LTR 54 was a highly adaptable S16 cinema film camera which can be prompted in Stable Diffusion by specifying \u201cshot on Aaton LTR\u201d to emulate its natural perspective, subtle vignette look, and the texture of film.",
            "images": [
                "323.jpg",
                "324.jpg",
                "325.jpg"
            ],
            "type": "cinema"
        },
        {
            "name": "ARRI ALEXA 65",
            "description": "A high-end 65mm digital cinema camera known for its extremely high resolution and dynamic range, which can be prompted by specifying \u201cshot on ALEXA 65\u201d for detailed, crisp images with smooth tonality similar to its large format look.",
            "images": [
                "328.jpg",
                "329.jpg",
                "330.jpg"
            ],
            "type": "cinema"
        },
        {
            "name": "Bolex H16",
            "description": "The Bolex H16 was a versatile, hand-cranked 16mm film camera which can be prompted in Stable Diffusion by specifying \u201cshot on Bolex H16\u201d to emulate its vintage 16mm look, natural vignette and handheld footage aesthetic.",
            "images": [
                "333.jpg",
                "334.jpg",
                "335.jpg"
            ],
            "type": "cinema"
        },
        {
            "name": "RED Digital Cinema Camera",
            "description": "The RED Digital Cinema Camera produces high-resolution digital footage with customizable color science, which can be simulated by specifying \u201cshot on RED camera\u201d desired RED image attributes include wide dynamic range and crisp details.",
            "images": [
                "338.jpg",
                "339.jpg",
                "340.jpg"
            ],
            "type": "cinema"
        },
        {
            "name": "Canon EOS 5D",
            "description": "The Canon EOS 5D pioneered large sensor digital photography with cinema-quality shallow depth of field, which can be prompted with \u201cshot on Canon EOS 5D\u201d & referencing desired attributes like smooth background bokeh.",
            "images": [
                "347.jpg",
                "348.jpg",
                "349.jpg"
            ],
            "type": "digital"
        },
        {
            "name": "Fujifilm X-T4",
            "description": "The Fujifilm X-T4 mirrorless camera produces images with Fujifilm\u2019s acclaimed color science and film simulation modes which can be simulated by prompting desired attributes like saturated colors, high contrast tones, and natural grain.",
            "images": [
                "352.jpg",
                "353.jpg",
                "354.jpg"
            ],
            "type": "digital"
        },
        {
            "name": "GoPro Hero",
            "description": "The GoPro Hero action camera captures ultra wide-angle point- of-view footage with a bold fisheye look that can be creatively prompted using \u201c(shot on GoPro Hero:1.4)\u201d.",
            "images": [
                "357.jpg",
                "358.jpg",
                "359.jpg"
            ],
            "type": "digital"
        },
        {
            "name": "Hasselblad X1D II",
            "description": "A medium format camera that produces extremely high res images with tons of detail and Hasselblad\u2019s iconic tonality, which can be simulated by prompting \u201cshot on Hasselblad X1D II\u201d with tags like fine texture, smooth color gradations.",
            "images": [
                "362.jpg",
                "363.jpg",
                "364.jpg"
            ],
            "type": "digital"
        },
        {
            "name": "Lumix GH5",
            "description": "The Panasonic Lumix GH5 is a Micro Four Thirds mirrorless camera known for its versatility in high bitrate 4K video, which can be creatively prompted with \u201cshot on Lumix GH5\u201d and tags like, cinematic bokeh, dynamic range, and vibrant colors.",
            "images": [
                "367.jpg",
                "368.jpg",
                "369.jpg"
            ],
            "type": "digital"
        },
        {
            "name": "Pentax 645Z",
            "description": "The Pentax 645Z medium format DSLR produces ultra high resolution images with tons of detail and incredible dynamic range, perfect for prompting \u201cshot on Pentax 645Z\u201d with rich textures, and smooth wide tonality.",
            "images": [
                "372.jpg",
                "373.jpg",
                "374.jpg"
            ],
            "type": "digital"
        },
        {
            "name": "Sony A7III",
            "description": "The Sony A7III full frame mirrorless camera offers immense flexibility with its advanced autofocus, prompt using \u201cshot on Sony A7III\u201d.",
            "images": [
                "377.jpg",
                "378.jpg",
                "379.jpg"
            ],
            "type": "digital"
        },
        {
            "name": "Leica T",
            "description": "The Leica T mirrorless APS-C system delivers Leica\u2019s renowned image quality in a sharp modern form factor. Prompt with \u201cshot on Leica T\u201d. Add tags like smooth skin tone, Leica colors, shallow depth of field and vignetting.",
            "images": [
                "382.jpg",
                "383.jpg",
                "384.jpg"
            ],
            "type": "digital"
        },
        {
            "name": "Diana F+",
            "description": "This plastic toy camera has a cult following for its dreamy soft focus and vignetted images perfect for images with a hazy retro film aesthetic. Use with a weight of 1.6, film grain, dreamy haze blur and light leak tags. High-Res fix will reduce the effect.",
            "images": [
                "391.jpg",
                "392.jpg",
                "393.jpg"
            ],
            "type": "retro"
        },
        {
            "name": "Hasselblad 500CM",
            "description": "The Hasselblad 500CM medium format film camera produces images with incredible detail and tonality, perfect for prompting ultra-high resolution shots with subtle smooth transitions between colors and tones.",
            "images": [
                "396.jpg",
                "397.jpg",
                "398.jpg"
            ],
            "type": "retro"
        },
        {
            "name": "HOLGA 120n",
            "description": "The Holga 120N toy film camera has a cult following for its vignetted, blurry, low-fi dreamlike images with light leaks perfect for prompting imaginative impressions with an unpredictable retro aesthetic.",
            "images": [
                "401.jpg",
                "402.jpg",
                "403.jpg"
            ],
            "type": "retro"
        },
        {
            "name": "Kodak Brownie",
            "description": "The Kodak Brownie box camera has an iconic vintage look with square medium format images, dark vignettes, soft focus and muted color tones perfect for prompting a nostalgic, retro stylistic perspective.",
            "images": [
                "406.jpg",
                "407.jpg",
                "408.jpg"
            ],
            "type": "retro"
        },
        {
            "name": "Kodak Funsaver",
            "description": "This plastic toy camera has a cult following for its dreamy soft focus and vignetted images perfect for images with a hazy retro film aesthetic. Use with a weight of 1.6, film grain, dreamy haze blur and light leak tags. High-Res fix will reduce the effect.",
            "images": [
                "411.jpg",
                "412.jpg",
                "413.jpg"
            ],
            "type": "retro"
        },
        {
            "name": "Leica M3",
            "description": "The Leica M3 rangefinder camera is known for its discreet operation, quiet shutter release, and exceptional image quality that enables prompting classic Leica tonality, microcontrast, and perspective from its superb prime lenses.",
            "images": [
                "416.jpg",
                "417.jpg",
                "418.jpg"
            ],
            "type": "retro"
        },
        {
            "name": "Rolleiflex",
            "description": "The Rolleiflex twin lens reflex medium format camera produces images with incredible detail and tonality perfect for prompting ultra-sharp photos with a distinctively intimate square perspective.",
            "images": [
                "421.jpg",
                "422.jpg",
                "423.jpg"
            ],
            "type": "retro"
        },
        {
            "name": "Polaroid SX-70",
            "description": "The Polaroid SX-70 instant camera has a signature square format with flat, muted colors, distinctive light streaks, and immediate tangible prints perfect for prompting nostalgic analog images with a faded retro aesthetic.",
            "images": [
                "426.jpg",
                "427.jpg",
                "428.jpg"
            ],
            "type": "retro"
        }
    ],
    "film types": [
        {
            "name": "Agfa Vista",
            "description": "Agfa Vista was an inexpensive color print film known for its wild oversaturated colors, making it perfect for prompting images with an intensely vibrant, saturated aesthetic.",
            "images": [
                "435.jpg",
                "436.jpg",
                "437.jpg"
            ]
        },
        {
            "name": "Cinestill 800T",
            "description": "Cinestill 800T is a tungsten-balanced 35mm motion picture film adapted for still photography, producing a signature low-fi crossover look with halation light leaks and rich cinematic colors that can be prompted by specifying its classic film attributes.",
            "images": [
                "440.jpg",
                "441.jpg",
                "442.jpg"
            ]
        },
        {
            "name": "Ektar 100",
            "description": "Kodak Ektar 100 is a fine grain 35mm color negative film prized for its incredibly saturated colors and clean sharpness, ideal for prompting images with vivid, true-to-life color rendition and detail.",
            "images": [
                "445.jpg",
                "446.jpg",
                "447.jpg"
            ]
        },
        {
            "name": "film grain",
            "description": "Film grain refers to the visible texture and particles inherent in analog photographic film, which can be prompted by specifying desired qualities like \u201cprominent grain\u201d, \u201cmuted low grain\u201d, or \u201cfine grain\u201d to achieve different textured retro film looks.",
            "images": [
                "450.jpg",
                "451.jpg",
                "452.jpg"
            ]
        },
        {
            "name": "Ilford HP5 Plus",
            "description": "Ilford HP5 Plus is an ISO 400 black and white film prized for its versatility, and characteristic medium grain, which makes it great for prompting flexible black and white images with a stylized classic film grain look. Weight needs to be over 1.6.",
            "images": [
                "455.jpg",
                "456.jpg",
                "457.jpg"
            ]
        },
        {
            "name": "Kodak Vision3",
            "description": "Kodak Vision3 is a professional 35mm motion picture camera film stock designed to deliver rich, vibrant color and fine grain ideal for prompting cinematic images and footage with robust color rendition and smooth textures.",
            "images": [
                "460.jpg",
                "461.jpg",
                "462.jpg"
            ]
        },
        {
            "name": "Kodak Vision3 IMAX",
            "description": "Kodak Vision3 IMAX is a large format 65mm color negative film specifically engineered for IMAX cameras to produce unparalleled levels of fine detail perfect for prompting crisp intricate, high-resolution images with tons of visual information.",
            "images": [
                "465.jpg",
                "466.jpg",
                "467.jpg"
            ]
        },
        {
            "name": "Lomochrome color film",
            "description": "Lomography Chromatic film, or Lomachrome, is a 35mm ISO 800 color negative film known for its vivid and unpredictable color shifts. Use this prompt with the Holga 120n or Diana F+ camera tags to make it work.",
            "images": [
                "470.jpg",
                "471.jpg",
                "472.jpg"
            ]
        },
        {
            "name": "Porta 160",
            "description": "Kodak Portra 160 is a 160 ISO color negative film celebrated for its saturated colors and flattering skin tones, ideal for portrait prompts requiring smooth tones and natural color rendition.",
            "images": [
                "475.jpg",
                "476.jpg",
                "477.jpg"
            ]
        },
        {
            "name": "Tri-X 400",
            "description": "Kodak Tri-X 400 is a classic ISO 400 monochromatic film distinguished by its rich blacks, broad exposure latitude, and distinct medium-sized grain, use with high weight of 1.8",
            "images": [
                "480.jpg",
                "481.jpg",
                "482.jpg"
            ]
        },
        {
            "name": "Velvia 100",
            "description": "Fujifilm Velvia 100 is a bright, vivid color reversal film known for its incredible saturation and fine grain, ideal for prompting brilliant landscape images with lush, dramatic colors and tons of detail.",
            "images": [
                "485.jpg",
                "486.jpg",
                "487.jpg"
            ]
        },
        {
            "name": "Fujicolor Pro",
            "description": "Fujicolor Pro film is known for its natural, accurate, and well- balanced color reproduction perfect for prompting images with a realistic and subtle Fujifilm color palette.",
            "images": [
                "490.jpg",
                "491.jpg",
                "492.jpg"
            ]
        }
    ],
    "lenses": [
        {
            "name": "50mm",
            "description": "A 50mm prime lens provides a natural field of view similar to human vision, useful for prompting realistic perspective in documentary or portrait photography styles",
            "images": [
                "504.jpg"
            ]
        },
        {
            "name": "8mm Fisheye Lens",
            "description": "A fisheye lens captures a spherical 180-degree field of view with strong circular barrel distortion perfect for prompting an immersive hemispherical perspective.",
            "images": [
                "505.jpg"
            ]
        },
        {
            "name": "Voigtl\u00e4nder Nokton 50mm f1.1",
            "description": "produces dreamy images with extremely shallow depth of field and buttery smooth bokeh",
            "images": [
                "506.jpg"
            ]
        }
    ],
    "filters effects": [
        {
            "name": "black and white",
            "description": "Removing color saturation creates monochromatic images focused on light, shapes, texture and mood.",
            "images": [
                "513.jpg"
            ]
        },
        {
            "name": "color filter",
            "description": "Change color to the color you want to adds a tint over the image to darken skies similar to using an actual colored glass filter on a film camera lens.",
            "images": [
                "514.jpg"
            ]
        },
        {
            "name": "bokeh",
            "description": "Buttery smooth, aesthetically blurred out-of-focus backgrounds artistically isolate the main subject by minimizing distractions.",
            "images": [
                "515.jpg"
            ]
        },
        {
            "name": "desaturated",
            "description": "",
            "images": [
                "518.jpg"
            ]
        },
        {
            "name": "grunge filter",
            "description": "Removing color vibrancy and overlaying film grain, stains and defects creates a worn weathered, grungy texture.",
            "images": [
                "518.jpg"
            ]
        },
        {
            "name": "dreamy haze",
            "description": "Ethereal, romantic imagery emerges through soft focus light haze, subtle distortions and a detached, floating perspective.",
            "images": [
                "519.jpg"
            ]
        },
        {
            "name": "glitch style",
            "description": "Manipulating or corrupting digital imagery to intentionally introduce distortions, artifacts colors shifts, banding, and other digital aberrations",
            "images": [
                "520.jpg"
            ]
        },
        {
            "name": "hologram effect",
            "description": "Creates a holographic lighting effect to clothing and backgrounds",
            "images": [
                "523.jpg"
            ]
        },
        {
            "name": "(infrared filter:1.4)",
            "description": "Emulates the extreme color shifts of infrared photography dominated by pinkish hues from foliage and skies to uniquely reinterpret reality.",
            "images": [
                "524.jpg"
            ]
        },
        {
            "name": "lens flare",
            "description": "Vivid polygonal lens flares stylize the scene by adding striking bursts of light as if beams were intersecting the camera optics.",
            "images": [
                "525.jpg"
            ]
        },
        {
            "name": "sepia tone",
            "description": "Warm antique sepia pigment toning imbues a nostalgic vintage aesthetic. Use with a low weight to avoid your subject being historical.",
            "images": [
                "528.jpg"
            ]
        },
        {
            "name": "soft focus",
            "description": "Intentionally diffusing sharpness through spherical aberration lends a romantic, dreamy impression.",
            "images": [
                "529.jpg"
            ]
        },
        {
            "name": "solarized",
            "description": "Partially inverting the tonal range by blocking shadows creates a surreal duotone look.",
            "images": [
                "530.jpg"
            ]
        },
        {
            "name": "long exposure",
            "description": "Blurring any motion conveys the passage of time and artistic intentionality through extended exposure techniques.",
            "images": [
                "533.jpg"
            ]
        },
        {
            "name": "ND filter",
            "description": "Neutral density filters reduce incoming light levels, allowing slower shutter speeds to smoothly capture and etherealize motion.",
            "images": [
                "534.jpg"
            ]
        },
        {
            "name": "overexposed",
            "description": "Increasing exposure washes out imagery with bright whites, pure hues, and solarized effects to focus on light and color.",
            "images": [
                "535.jpg"
            ]
        },
        {
            "name": "technicolor",
            "description": "Mimicking the saturated look of old Technicolor film processes through vibrant, dramatic colors.",
            "images": [
                "538.jpg"
            ]
        },
        {
            "name": "underexposed",
            "description": "Decreasing exposure mutes the image with dark shadows and somber tones for mysterious low key effects.",
            "images": [
                "539.jpg"
            ]
        },
        {
            "name": "vignette",
            "description": "Framing the central subject by gradually darkening the outer corners and edges puts emphasis on the main focus.",
            "images": [
                "540.jpg"
            ]
        }
    ],
    "photographers": [
        {
            "name": "Alberto Seveso",
            "description": "",
            "images": [
                "547.jpg"
            ]
        },
        {
            "name": "Alex Timmermans",
            "description": "",
            "images": [
                "548.jpg"
            ]
        },
        {
            "name": "Alfred Stieglitz",
            "description": "",
            "images": [
                "549.jpg"
            ]
        },
        {
            "name": "Ando Fuchs",
            "description": "",
            "images": [
                "552.jpg"
            ]
        },
        {
            "name": "Anne Brigman",
            "description": "",
            "images": [
                "553.jpg"
            ]
        },
        {
            "name": "August Sander",
            "description": "",
            "images": [
                "554.jpg"
            ]
        },
        {
            "name": "Brandon Woelfel",
            "description": "",
            "images": [
                "557.jpg"
            ]
        },
        {
            "name": "Chris Friel",
            "description": "",
            "images": [
                "558.jpg"
            ]
        },
        {
            "name": "David LaChapelle",
            "description": "",
            "images": [
                "559.jpg"
            ]
        },
        {
            "name": "Eugene Atget",
            "description": "",
            "images": [
                "562.jpg"
            ]
        },
        {
            "name": "Garry Winograd",
            "description": "",
            "images": [
                "563.jpg"
            ]
        },
        {
            "name": "George Hurrell",
            "description": "",
            "images": [
                "564.jpg"
            ]
        },
        {
            "name": "Germaine Krull",
            "description": "",
            "images": [
                "567.jpg"
            ]
        },
        {
            "name": "Hans Bellmer",
            "description": "",
            "images": [
                "568.jpg"
            ]
        },
        {
            "name": "Hayao Miyazaki",
            "description": "",
            "images": [
                "569.jpg"
            ]
        },
        {
            "name": "James Bidgood",
            "description": "",
            "images": [
                "572.jpg"
            ]
        },
        {
            "name": "Kim Keever",
            "description": "",
            "images": [
                "573.jpg"
            ]
        },
        {
            "name": "Lee Friedlander",
            "description": "",
            "images": [
                "574.jpg"
            ]
        },
        {
            "name": "Liam Wong",
            "description": "",
            "images": [
                "577.jpg"
            ]
        },
        {
            "name": "Lotte Reiniger",
            "description": "",
            "images": [
                "578.jpg"
            ]
        },
        {
            "name": "Martin Schoeller",
            "description": "",
            "images": [
                "579.jpg"
            ]
        },
        {
            "name": "Mickalene Thomas",
            "description": "",
            "images": [
                "582.jpg"
            ]
        },
        {
            "name": "Miko Lagerstedt",
            "description": "",
            "images": [
                "583.jpg"
            ]
        },
        {
            "name": "Miles Aldridge",
            "description": "",
            "images": [
                "584.jpg"
            ]
        },
        {
            "name": "Misha Gordin",
            "description": "",
            "images": [
                "587.jpg"
            ]
        },
        {
            "name": "Nan Goldin",
            "description": "",
            "images": [
                "588.jpg"
            ]
        },
        {
            "name": "Nathan Wirth",
            "description": "",
            "images": [
                "589.jpg"
            ]
        },
        {
            "name": "Nick Knight",
            "description": "",
            "images": [
                "592.jpg"
            ]
        },
        {
            "name": "Oleg Oprisco",
            "description": "",
            "images": [
                "593.jpg"
            ]
        },
        {
            "name": "Oskar Fischinger",
            "description": "",
            "images": [
                "594.jpg"
            ]
        },
        {
            "name": "Paolo Roversi",
            "description": "",
            "images": [
                "597.jpg"
            ]
        },
        {
            "name": "Paul Barson",
            "description": "",
            "images": [
                "598.jpg"
            ]
        },
        {
            "name": "Richard Avedon",
            "description": "",
            "images": [
                "599.jpg"
            ]
        },
        {
            "name": "Tim Walker",
            "description": "",
            "images": [
                "602.jpg"
            ]
        },
        {
            "name": "Tyler Shields",
            "description": "",
            "images": [
                "3631.jpg"
            ]
        },
        {
            "name": "Walker Evans",
            "description": "",
            "images": [
                "603.jpg"
            ]
        },
        {
            "name": "Wes Anderson",
            "description": "",
            "images": [
                "607.jpg"
            ]
        },
        {
            "name": "Yousuf Karsh",
            "description": "",
            "images": [
                "608.jpg"
            ]
        }
    ]
}


// Inverts the scrolling of context menus
const ActivateNodeType = "BilboXPhotoPrompt"
const relPath = "/extensions/bilbox-comfyui"
const id = "BilboX.PromptGeekContextMenuEnhance";

function createCardElement(title, description, img_path, holder, callback)
{
	var card_html = ` \
        <div class="art__image"></div> \
        <div class="art__text-wrapper">  \
			<div class="art__title">${title}</div>  \
            <div class="art__details-wrapper"> \
                <p class="art__excerpt">${description}</p>  \
            </div>  \
        </div> \
        <a href="#" class="art__link"></a>  \
        <input type="checkbox" />  `;

	let grp = document.createElement('div');
	grp.classList.add('grid_group');
	var card = document.createElement("div");
	card.classList.add('grid-art');
	card.innerHTML = card_html;

	var d2 = card.querySelector(":scope > .art__image")
	if (d2)
		d2.setAttribute('style', 'background-image:url("' + img_path + '")')

	var link = card.querySelector("a");
	link.addEventListener("click", function (e) {
		e.preventDefault();
		if(callback)
			callback(title);
		});

	grp.appendChild(card);
	holder.appendChild(grp);
}

function set_preview_not_editable(node)
{
	if (node.widgets[0].name == 'modal_combos')
	{
		for(var w of node.widgets)
		{
			if(w.name=="preview")
			{
				w.inputEl.readOnly = true;
				return w;
			}
		}
	}
	return null;
}

function update_preview(node)
{
	if(node.type != ActivateNodeType)
		return "";

	var dict = new Object();
	
	for(var w of node.widgets)
		dict[w.name] = w.value;

	const EMPTY_TEXT = "";
	var style = dict.style == EMPTY_TEXT ? "" : `${dict.style} photo of `;
	var framing = dict.framing == EMPTY_TEXT ? "" : `, ${dict.framing}`;
    var setting_background = dict.setting_background == EMPTY_TEXT ? "" : `, ${dict.setting_background}`;
	var lighting = dict.lighting == EMPTY_TEXT ? "" : `, ${dict.lighting}`;
	var camera_angle = dict.camera_angle == EMPTY_TEXT ? "" : `, ${dict.camera_angle}`;
	var camera_properties = dict.camera_properties == EMPTY_TEXT ? "" : `, ${dict.camera_properties}`;
	var film_types = dict.film_types == EMPTY_TEXT ? "" : `, ${dict.film_types}`;
	var lenses = dict.lenses == EMPTY_TEXT ? "" : `, ${dict.lenses}`;
	var filters_effects = dict.filters_effects == EMPTY_TEXT ? "" : `, ${dict.filters_effects}`;
	var photographers = dict.photographers == EMPTY_TEXT ? "" : `, in the style of ${dict.photographers}`;

	var res=`${style}${dict.subject}${framing}${setting_background}${lighting}${camera_angle}${camera_properties}${film_types}${lenses}${filters_effects}${photographers}`;
	node.preview_widget.value = res;
    return res;
}

function customize_node(node)
{
	if('preview_widget' in node)
		return;
	var preview_widget = set_preview_not_editable(node);
	if(preview_widget)
	{
		node.preview_widget = preview_widget;
		update_preview(node)
	}
}

app.registerExtension({
	name: id,

	init() {
		function installCss()
		{
			console.log("[BilboX] Installing bilbox.css...")
			let head = document.getElementsByTagName('HEAD')[0];
			let link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = relPath+'/bilbox.css';
			head.appendChild(link);
		}

		function setup_tooltips(combo_name)
		{
			var cname = combo_name.replace("_"," ");
			if(!(cname in window.bilbox_promptgeek_data))
				return;
			var data = bilbox_promptgeek_data[cname].reduce(
				(obj, item) => Object.assign(obj, { [item["name"]]: item }), {});
			const items = Array.from(document.querySelectorAll(".submenu"));
			for (var e of items) {
				var title = e.innerText;
				if(title in data)
				{
					//e.setAttribute('data-tooltip', data[title]["description"]);
					var img = relPath+'/PromptGeek/'+ data[title]["images"][0]
					e.innerHTML += '<span><img src="'+img+'">'+
						'<a href="https://www.youtube.com/@promptgeek">PromptGeek\'s Youtube</a><br>'+
						'<a href="https://promptgeek.gumroad.com/l/photoreal">PromptGeek\'s "Photoreal" Book</a><br>'+
						'<h3>'+ title+'</h3><p align="justify">'+data[title]["description"]+'</p></span>';
					e.classList.add("bx_tooltip");
				}
			}
		}

		function setup_selection_modal(combo_name, callback)
		{
			var container = null;
			var modal = null;
			
			modal = document.getElementById("bx_modal_context_menu");
			if(!modal)
			{
				modal = document.createElement("div");
				modal.classList.add("comfy-modal");
				modal.setAttribute("id","bx_modal_context_menu");
				modal.innerHTML='<h3 class="bx_modal_title">'+combo_name.replace("_"," ")+"</h3>"+
					'<span><a href="https://www.youtube.com/@promptgeek">PromptGeek\'s Youtube</a><br>'+
					'<a href="https://promptgeek.gumroad.com/l/photoreal">PromptGeek\'s "Photoreal" Book</a></span>';

				var container = document.createElement("div");
				container.classList.add("comfy-modal-content", "cards-container", "grid-layout");
				modal.appendChild(container);
				document.body.appendChild(modal);
			}

			container = modal.getElementsByClassName("cards-container")[0];
			container.innerHTML="";
			modal.setAttribute('style','display: block; width: 80%; height: 80%;')

			var cname = combo_name.replace("_"," ");
			if(!(cname in window.bilbox_promptgeek_data))
				return;

			var data = bilbox_promptgeek_data[cname].reduce(
				(obj, item) => Object.assign(obj, { [item["name"]]: item }), {});
			const items = Array.from(document.querySelectorAll(".litemenu-entry"));

			createCardElement("None","", "", container,
			(value) => { 
				modal.setAttribute('style','display: none; width: 80%; height: 80%;')
				callback("");
			});

			for(var e of window.bilbox_promptgeek_data[cname])
			{
				var img_path = relPath+'/PromptGeek/'+ e["images"][0]
				createCardElement(e["name"],e["description"], img_path, container,
					(value) => { 
						modal.setAttribute('style','display: none; width: 80%; height: 80%;')
						callback(value);
					});
			}
		}

		installCss()

		window.bilbox_promptgeek_data = photo_data

		const lcg = LGraphCanvas.prototype.processNodeWidgets;

		LGraphCanvas.prototype.processNodeWidgets = function(
			node,
			pos,
			event,
			active_widget
		) {
			if( node.type != ActivateNodeType)
				return lcg.call(this, node, pos, event, active_widget);

			for (let widget of node.widgets) {
					if (widget?.element?.nodeName === "TEXTAREA") {
						widget.element.classList.add("bilbox-input");
					}
			}

			// Patch as it seems that in nodeCreated, node type is not set directly
			customize_node(node);

			if(event.type != LiteGraph.pointerevents_method+"down")
				return lcg.call(this, node, pos, event, active_widget);
			if (!node.widgets || !node.widgets.length || (!this.allow_interaction && !node.flags.allow_interaction))
			 	return lcg.call(this, node, pos, event, active_widget);
	
			var x = pos[0] - node.pos[0];
			var y = pos[1] - node.pos[1];
			var width = node.size[0];
			var that = this;
			var ref_window = this.getCanvasWindow();
	
			var combo_hit=false
			for (var i = 0; i < node.widgets.length; ++i) {
			 	var w = node.widgets[i];
			 	if(!w || w.disabled)
			 		continue;
				var widget_height = w.computeSize ? w.computeSize(width)[1] : LiteGraph.NODE_WIDGET_HEIGHT;
				var widget_width = w.width || width;
				//outside
				if ( w != active_widget && 
					(x < 6 || x > widget_width - 12 || y < w.last_y || y > w.last_y + widget_height || w.last_y === undefined) ) 
					continue;
				
				if(w.type != "combo")
					continue;
					
				if ( w == active_widget || (x > 6 && x < widget_width - 12 && y > w.last_y && y < w.last_y + widget_height) ) {

					var delta = x < 40 ? -1 : x > widget_width - 40 ? 1 : 0;
					if(delta)
						continue;
					combo_hit=true;
					var values = w.options.values;
					if (values && values.constructor === Function) {
						values = w.options.values(w, node);
					}
					var values_list = values.constructor === Array ? values : Object.keys(values);
					var text_values = values != values_list ? Object.values(values) : values;

					function inner_clicked(v, option, event) {
						if(values != values_list)
							v = text_values.indexOf(v);
						this.value = v;
						inner_value_change(this, v);
						that.dirty_canvas = true;
						return false;
					}

					if(isComboModal(node))
					{
						setup_selection_modal(w.name, inner_clicked.bind(w));
					}
					else
					{					
						var menu = new LiteGraph.ContextMenu(values, {
								scale: Math.max(1, this.ds.scale),
								event: event,
								className: "dark",
								callback: inner_clicked.bind(w),
								node: node,
								widget: w,
							},
							ref_window);
                        setup_tooltips(w.name);
					}
				}
			}
			if(!combo_hit)
				return lcg.call(this, node, pos, event, active_widget);	
			// //const ctx = lcg.call(this, node, pos, event, active_widget);
			function inner_value_change(widget, value) {
				if(widget.type == "number"){
					value = Number(value);
				}
				widget.value = value;
				if ( widget.options && widget.options.property && node.properties[widget.options.property] !== undefined ) {
					node.setProperty( widget.options.property, value );
				}
				if (widget.callback) {
					widget.callback(widget.value, that, node, pos, event);
				}

				update_preview(node);
			}
			return null;
		}
		

		const ctxMenu = LiteGraph.ContextMenu;

		function isComboModal(node)
		{
			for (var i = 0; i < node.widgets.length; ++i)
			{
				var w = node.widgets[i];
				if(w.name == "modal_combos")
					return w.value;
			}
			return true;
		}

	},
	loadedGraphNode(node, app) {
		if(node.type != ActivateNodeType)
			return;		
		customize_node(node);
	},
	nodeCreated(node, app) {
		// hotfix cause node.type is somehow has undefined value
		if (node.widgets[0].name != 'modal_combos')
			return;
		// if(node.type != ActivateNodeType)
			// return;

		customize_node(node); // init event listeners

		function checkTextArea(event)
		{
			update_preview(node);
		}

		for(var i in node.widgets)
		{
		 	var w = node.widgets[i];
		 	if(w.type == "customtext" && 'inputEl' in w)
			{
				
				w.inputEl.addEventListener("input", checkTextArea.bind(node));
			} 
		}

		node.onWidgetChanged = function( name, value, old_value)
		{
			update_preview(node);
		}
	}
});
