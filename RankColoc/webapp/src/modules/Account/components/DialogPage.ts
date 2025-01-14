import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { DialogType } from '../dialogs';
import * as config from '../../../clientConfig-coloc.json';

@Component
export default class DialogPage extends Vue {
  @Prop({ type: String, required: true })
  dialog!: DialogType;

  render() {
    return null;
  }
  created() {
    this.showDialog();
  }
  @Watch('dialog')
  showDialog() {
    this.$store.commit('account/showDialog', {
      dialog: this.dialog,
      dialogCloseRedirect: '/'
    });
  }
}
