

<template>
    <a :href="'#' + entryName.replace(/\s+/g, '-').toLowerCase() + '-' + keyAnchor" class="index-link">{{ entryName }}</a>
</template>

<script>
export default {
    props: [
        'keyAnchor',
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