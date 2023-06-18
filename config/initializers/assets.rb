# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'fonts')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( feedback.js menu_hide.js ymap.js entrants.js new_entrant.js ckeditor/ckeditor.js ckeditor_init.js datepicker.js vendor/modernizr.js application_blind.css axios.min.js vue.js vue@2.7.14.js Sortable.min.js vuedraggable.umd.min.js )