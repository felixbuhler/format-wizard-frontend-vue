

<template>
   <a :href="'#' + entryName.replace(/\s+/g, '-').toLowerCase()" class="index-link">{{ entryName }}</a>
</template>

<script>
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
    ]
}
</script>