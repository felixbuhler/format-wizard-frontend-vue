<template>
    <div class='entry-content'>
        <div class='column'>

        </div>
        <div class='column headline'>
            <div class='bubblewrap sticky'>
                <h4 class='bubble'>{{ entryName }}</h4>
            </div>
        </div>
        <div class='column text'>
            <div class='text-column paper-image'>
                <div class='paper'>
                    <div v-if="entrySafeZoneTop" class="safe-space safe-space-top"></div>
                    <div v-if="entrySafeZoneBottom" class="safe-space safe-space-bottom"></div>
                    <div v-if="entrySafeZoneLeft" class="safe-space safe-space-left"></div>
                    <div v-if="entrySafeZoneRight" class="safe-space safe-space-right"></div>
                </div>
            </div>
            <div class='text-column'>
                <h5>{{ entryName }}</h5>

                <!-- Size in MM -->
                <div class='info' v-if="entryWidth && entryHeight">
                    <h6>Size in Pixel</h6>
                    <p>{{ entryWidth }} &times; {{ entryHeight }} px</p>
                </div>

                <!-- Size in PX -->
                <div class='info' v-if="entryWidthPixel && entryHeightPixel">
                    <h6>Size in Pixel at 300dpi</h6>
                    <p>{{ entryWidthPixel }} &times; {{ entryHeightPixel }} px</p>
                </div>

                <!-- Use Cases -->
                <div class='info' v-if="entryUseCases">
                    <h6>Use Cases</h6>
                    <p>{{ entryUseCases }}</p>
                </div>

                <!-- Example Projects -->
                <div class='info' v-if="entryExampleProjects">
                    <h6>Example Projects</h6>
                    <p>
                        <SanityBlocks :blocks=entryExampleProjects />
                    </p>
                </div>

                <!-- Aspect Ratio  -->
                <div class='info' v-if="entryAspectRatio">
                    <h6>Aspect Ratio</h6>
                    <p>{{ entryAspectRatio }}</p>
                </div>

                <!-- Min. Pixel Size  -->
                <div class='info' v-if="entryMinSizePixel">
                    <h6>Min. Pixel Size</h6>
                    <p>{{ entryMinSizePixel }}</p>
                </div>

                <!-- Recommended Pixel Size  -->
                <div class='info' v-if="entryRecSizePixel">
                    <h6>Recommended Pixel Size</h6>
                    <p>{{ entryRecSizePixel }}</p>
                </div>

                <!-- Duration  -->
                <div class='info' v-if="entryMaxDuration || entryMinDuration">
                    <h6>Duration</h6>
                    <p>
                        <span v-if="entryMinDuration">{{ entryMinDuration }}</span>
                        <span v-if="entryMaxDuration || entryMinDuration"> to </span>
                        <span v-if="entryMaxDuration">{{ entryMaxDuration }}</span>
                    </p>
                </div>

                <!-- Franes Per Second -->
                <div class='info' v-if="entryFramesPerSecond">
                    <h6>Frames Per Second</h6>
                    <p>{{ entryFramesPerSecond }}</p>
                </div>

                <!-- Max. File Size  -->
                <div class='info' v-if="entryMaxFileSize">
                    <h6>Max. File Size</h6>
                    <p>{{ entryMaxFileSize }}</p>
                </div>

                <!-- Video Codec  -->
                <div class='info' v-if="entryVideoCodec">
                    <h6>Video Codec</h6>
                    <p>
                        <SanityBlocks :blocks=entryVideoCodec />
                    </p>
                </div>

                <!-- Audio Codec  -->
                <div class='info' v-if="entryAudioCodec">
                    <h6>Audio Codec</h6>
                    <p>
                        <SanityBlocks :blocks=entryAudioCodec />
                    </p>
                </div>

                <!-- Color Space  -->
                <div class='info' v-if="entryColorSpace">
                    <h6>Color Space</h6>
                    <p>{{ entryColorSpace }}</p>
                </div>

                <!-- Safe Zone  -->
                <div class='info' v-if="entrySafeZone">
                    <h6>Safe Zone</h6>
                    <p>
                        <span v-if="entrySafeZoneTop">Top: {{ entrySafeZoneTop }} px</span><br>
                        <span v-if="entrySafeZoneBottom">Bottom: {{ entrySafeZoneBottom }} px</span><br>
                        <span v-if="entrySafeZoneLeft">Left: {{ entrySafeZoneLeft }} px</span><br>
                        <span v-if="entrySafeZoneRight">Right: {{ entrySafeZoneRight }} px</span>
                    </p>
                </div>

                <!-- Further Information  -->
                <div class='info' v-if="entryFurtherInformation">
                    <h6>Further Information</h6>
                    <p>
                        <SanityBlocks :blocks=entryFurtherInformation />
                    </p>
                </div>

            </div>


        </div>
    </div>


</template>

<script>

import { SanityBlocks } from 'sanity-blocks-vue-component';

export default {


    props: [
        'entryName',
        'entryWidth', 'entryHeight',
        'entryWidthPixel', 'entryHeightPixel',
        'entryUseCases',
        'entryExampleProjects',
        'entryAspectRatio',
        'entryMinSizePixel',
        'entryRecSizePixel',
        'entryMaxDuration', 'entryMinDuration',
        'entryFramesPerSecond',
        'entryMaxFileSize',
        'entryVideoCodec',
        'entryAudioCodec',
        'entryColorSpace',
        'entrySafeZone', 'entrySafeZoneTop', 'entrySafeZoneBottom', 'entrySafeZoneLeft', 'entrySafeZoneRight', 'entryFurtherInformation'
    ],
    components: { SanityBlocks },
    setup() {
        const blocks = ['entryVideoCodec',
            'entryAudioCodec', 'entryFurtherInformation', 'entryExampleProjects'];
        const serializers = {
        };
        return { blocks, serializers };
    }
}
</script>
     

<style scoped>
.paper {
    --entryWidth: v-bind(entryWidth);
    --entryHeight: v-bind(entryHeight);
    width: calc(var(--unit) * 0.5 * var(--entryWidth));
    height: calc(var(--unit) * 0.5* var(--entryHeight));
}

.safe-space-top {
    --safezonetop: v-bind(entrySafeZoneTop);
    top: calc(var(--unit) * 0.5* var(--safezonetop));
}

.safe-space-bottom {
    --safezonebottom: v-bind(entrySafeZoneBottom);
    bottom: calc(var(--unit) * 0.5* var(--safezonebottom));
}

.safe-space-left {
    --safezoneleft: v-bind(entrySafeZoneLeft);
    left: calc(var(--unit) * 0.5* var(--safezoneleft));
}

.safe-space-right {
    --safezoneright: v-bind(entrySafeZoneRight);
    right: calc(var(--unit) * 0.5* var(--safezoneright));
}
</style>