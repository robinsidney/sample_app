guard 'spork', :cucumber_env => { 'RAILS_ENV' => 'test' }, :rspec_env => { 'RAILS_ENV' => 'test' } do
  watch('config/application.rb')
  watch('config/environment.rb')
  watch('config/environments/test.rb')
  watch(%r{^config/initializers/.+\.rb$})
  watch('Gemfile')
  watch('Gemfile.lock')
  watch('spec/spec_helper.rb') { :rspec }
  watch('test/test_helper.rb') { :test_unit }
  watch(%r{features/support/}) { :cucumber }
end

group 'tests-with-spork' do

  guard 'rspec', :cli => "--drb", :all_after_pass => false do
    watch('spec/spec_helper.rb') { "spec" }

    watch(%r{^spec/controllers/.+_spec\.rb$})
    watch(%r{^spec/models/.+integration_spec\.rb$})
    watch(%r{^spec/helpers/.+_spec\.rb$})
    watch(%r{^spec/routing/.+_spec\.rb$})
    watch(%r{^spec/requests/.+_spec\.rb$})

    watch(%r{^app/models/(.+)\.rb$}) { |m| "spec/models/#{m[1]}_integration_spec.rb" }
    watch(%r{^app/helpers/(.+)\.rb$}) { |m| "spec/helpers/#{m[1]}_spec.rb" }
    watch(%r{^app/controllers/(.+)_(controller)\.rb$}) do |m|
      [
              "spec/routing/#{m[1]}_routing_spec.rb",
              "spec/#{m[2]}s/#{m[1]}_#{m[2]}_spec.rb"
      ]
    end

    watch(%r{^spec/support/(.+)\.rb$}) { "spec" }
    watch('config/routes.rb') { "spec/routing" }
    watch('app/controllers/application_controller.rb') { "spec/controllers" }

    watch(%r{^spec/lib/.+_integration_spec\.rb$})
  end
end

group 'unit-tests' do
  guard 'rspec', :all_on_start => false, :all_after_pass => false, :bundler => false do
    watch(%r{^lib/(.+)\.rb$}) { |m| "spec/lib/#{m[1]}_spec.rb" }

    # ?<! Negative lookbehind assertion: ensures that the preceding characters do not match 'integration',
    # but doesn't include those characters in the matched text
    watch(%r{^spec/models/.*(?<!integration)_spec\.rb$})
    watch(%r{^spec/lib/.*(?<!integration)_spec\.rb$})
  end
end
